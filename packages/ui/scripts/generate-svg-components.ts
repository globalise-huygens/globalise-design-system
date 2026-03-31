#!/usr/bin/env node

/**
 * Generates React components from SVG files in src/assets/.
 *
 * Drop SVG files into:
 *   src/assets/icons/   → Icon components  (add.svg → IconAdd)
 *   src/assets/logo/    → Logo components  (lockup-black.svg → LogoLockup)
 *
 * For logos only the *-black.svg variant is used; the fill colour is swapped
 * to currentColor so one component works on any background.
 *
 * Hand-written components without a matching SVG (e.g. IconClose, LogoNavbar)
 * are kept and re-exported in the barrel index.
 *
 * Run:  pnpm generate:svg
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname!, "..");
const ASSETS = path.join(ROOT, "src/assets");
const COMPONENTS = path.join(ROOT, "src/components");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** kebab-case → PascalCase: "arrow-right" → "ArrowRight" */
function pascalCase(s: string): string {
  return s.replace(/(^|-)([a-z])/g, (_, __, c: string) => c.toUpperCase());
}

/** Pull viewBox + inner elements out of an SVG file. */
function parseSvg(raw: string) {
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) throw new Error("SVG is missing a viewBox attribute");

  const inner = raw.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1]?.trim();
  if (!inner) throw new Error("Could not extract SVG content");

  return {
    viewBox,
    // Strip Figma mask wrappers, swap hardcoded fills → currentColor
    body: inner
      .replace(
        /<mask[\s\S]*?<\/mask>\s*<g\s+mask="[^"]*">([\s\S]*?)<\/g>/,
        "$1",
      )
      .replace(/fill="(?!none)[^"]+"/g, 'fill="currentColor"')
      .trim(),
  };
}

/** Emit a React.forwardRef SVG component. */
function componentTemplate(
  name: string,
  viewBox: string,
  body: string,
): string {
  return `import * as React from "react";

const ${name} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${body}
    </svg>
  ),
);
${name}.displayName = "${name}";

export { ${name} };
`;
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

function generate(
  folder: string,
  prefix: string,
  toComponentName: (stem: string) => string = (s) => prefix + pascalCase(s),
  filterFile: (name: string) => boolean = () => true,
) {
  const srcDir = path.join(ASSETS, folder);
  const outDir = path.join(COMPONENTS, folder);
  fs.mkdirSync(outDir, { recursive: true });

  const svgs = fs
    .readdirSync(srcDir)
    .filter((f: string) => f.endsWith(".svg") && filterFile(f))
    .sort();

  const generated = new Set<string>();

  for (const file of svgs) {
    const raw = fs.readFileSync(path.join(srcDir, file), "utf-8");
    const name = toComponentName(path.basename(file, ".svg"));
    const { viewBox, body } = parseSvg(raw);

    fs.writeFileSync(
      path.join(outDir, `${name}.tsx`),
      componentTemplate(name, viewBox, body),
    );
    generated.add(name);
    console.log(`  ✓ ${name}.tsx`);
  }

  // Keep hand-written components that don't have a source SVG
  const handWritten = fs
    .readdirSync(outDir)
    .filter(
      (f: string) =>
        f.endsWith(".tsx") && !generated.has(f.replace(/\.tsx$/, "")),
    )
    .map((f: string) => f.replace(/\.tsx$/, ""))
    .sort();

  for (const name of handWritten) {
    generated.add(name);
    console.log(`  · ${name}.tsx (hand-written, kept)`);
  }

  // Barrel index
  const all = [...generated].sort();
  const barrel =
    all.map((n) => `export { ${n} } from "./${n}";`).join("\n") + "\n";
  fs.writeFileSync(path.join(outDir, "index.ts"), barrel);
  console.log(`  → index.ts (${all.length} exports)\n`);
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

console.log("\nGenerating SVG components…\n");

generate("icons", "Icon");

generate(
  "logo",
  "",
  (stem) => {
    // lockup-black → LogoLockup, logomark-black → Logomark, logotype-black → Logotype
    const base = stem.replace(/-black$/, "");
    return pascalCase(base.startsWith("logo") ? base : `logo-${base}`);
  },
  (f) => f.endsWith("-black.svg"),
);

console.log("Done ✓");

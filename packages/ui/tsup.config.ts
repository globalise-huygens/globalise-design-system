import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  async onSuccess() {
    const { cpSync, readFileSync, writeFileSync } = await import("fs");
    const globalsCss = readFileSync("src/styles/globals.css", "utf-8");
    const componentsCss = readFileSync("src/styles/components.css", "utf-8");
    const documentDetailCss = readFileSync(
      "src/styles/document-detail.css",
      "utf-8",
    );

    writeFileSync(
      "dist/styles.css",
      `${globalsCss}\n\n${componentsCss}\n\n${documentDetailCss}`,
    );
    cpSync("src/assets", "dist/assets", { recursive: true });

    // Prepend "use client" directive for React Server Components compatibility
    for (const file of ["dist/index.js", "dist/index.cjs"]) {
      const content = readFileSync(file, "utf-8");
      writeFileSync(file, `"use client";\n${content}`);
    }
  },
});

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
    cpSync("src/styles/globals.css", "dist/styles.css");
    cpSync("src/assets", "dist/assets", { recursive: true });

    // Prepend "use client" directive for React Server Components compatibility
    for (const file of ["dist/index.js", "dist/index.cjs"]) {
      const content = readFileSync(file, "utf-8");
      writeFileSync(file, `"use client";\n${content}`);
    }
  },
});

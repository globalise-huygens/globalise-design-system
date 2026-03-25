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
    const { cpSync } = await import("fs");
    cpSync("src/styles/globals.css", "dist/styles.css");
    cpSync("src/assets", "dist/assets", { recursive: true });
  },
});

import eslint from "@eslint/js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/"],
  },
);

import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    nursery: "warn",
    pedantic: "warn",
    perf: "warn",
    restriction: "error",
    style: "warn",
    suspicious: "warn",
  },
  env: {
    builtin: true,
  },
  globals: {
    defineAppConfig: "readonly",
    defineProps: "readonly",
    process: "readonly",
  },
  overrides: [
    {
      files: ["**/components/**/*.ts", "**/components/**/*.vue"],
      rules: { "unicorn/filename-case": ["error", { case: "pascalCase" }] },
    },
  ],
  plugins: ["typescript", "unicorn", "oxc"],
  rules: {
    "no-ternary": "off",
    "no-undefined": "off",
    "one-var": "off",
    "oxc/no-async-await": "off",
    "oxc/no-optional-chaining": "off",
    "sort-imports": "off",
  },
});

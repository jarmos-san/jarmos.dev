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
    amd: true,
    browser: true,
    builtin: true,
    node: true,
    "shared-node-browser": true,
    vitest: true,
    vue: true,
  },
  globals: {
    defineAppConfig: "readonly",
    defineProps: "readonly",
    process: "readonly",
  },
  options: {
    maxWarnings: 10,
    reportUnusedDisableDirectives: "error",
    respectEslintDisableDirectives: false,
    typeAware: true,
    typeCheck: true,
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
    "prefer-template": "off",
    "sort-imports": "off",
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
});

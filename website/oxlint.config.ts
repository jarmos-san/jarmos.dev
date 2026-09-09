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
  plugins: ["typescript", "unicorn", "oxc"],
  rules: {
    "no-undefined": "off",
    "one-var": "off",
    "oxc/no-async-await": "off",
    "oxc/no-optional-chaining": "off",
  },
});

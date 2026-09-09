import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    nursery: "warn",
    pedantic: "warn",
  },
  env: {
    builtin: true,
  },
  globals: {
    defineProps: "readonly",
    process: "readonly",
    defineAppConfig: "readonly",
  },
  plugins: ["typescript", "unicorn", "oxc"],
  rules: {},
});

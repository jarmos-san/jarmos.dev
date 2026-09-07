import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  ignorePatterns: [".nuxt", ".data", "pnpm-*.yaml", "node_modules"],
  jsdoc: {
    bracketSpacing: true,
    descriptionTag: true,
    descriptionWithDot: true,
    preferCodeFences: true,
    separateReturnsFromParam: true,
  },
  objectWrap: "preserve",
  proseWrap: "always",
  semi: true,
  singleQuote: false,
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  sortTailwindcss: true,
  tabWidth: 2,
  trailingComma: "all",
  vueIndentScriptAndStyle: true,
});

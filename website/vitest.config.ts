import { defineVitestProject } from "@nuxt/test-utils/config";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

const CI_MAX_BAIL = 3;
const CI_MAX_RETRY = 3;
const CI_MIN_RETRY = 0;

export default defineConfig({
  test: {
    bail: process.env.CI === "true" ? CI_MAX_BAIL : undefined,
    coverage: {
      enabled: true,
      exclude: [
        "*.config.ts",
        "**/app.vue",
        "**/types/**/*.ts",
        "**/pages/**/*.vue",
        "**/layouts/**/*.vue",
        ...coverageConfigDefaults.exclude,
      ],
      reporter: ["text", "json"],
    },
    logHeapUsage: true,
    projects: [
      defineVitestProject({
        test: {
          environment: "nuxt",
          include: ["tests/nuxt/**/*.test.ts"],
          name: "nuxt",
        },
      }),
      {
        test: {
          environment: "node",
          include: ["tests/unittests/**/*.test.ts"],
          name: "unit",
        },
      },
    ],
    reporters:
      process.env.GITHUB_ACTIONS === "true"
        ? ["dot", "github-actions"]
        : ["verbose"],
    retry: process.env.CI === "true" ? CI_MAX_RETRY : CI_MIN_RETRY,
    silent: process.env.CI === "true" ? false : "passed-only",
    watch: false,
  },
});

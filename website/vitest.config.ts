import { defineVitestProject } from "@nuxt/test-utils/config";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Run the tests in isolated environments, one for unit tests and another
    // For component tests with Nuxt
    projects: [
      // Unit tests
      {
        test: {
          environment: "node",
          include: ["tests/unittests/**/*.test.ts"],
          name: "unit",
        },
      },
      // Component tests using Nuxt.js
      defineVitestProject({
        test: {
          environment: "nuxt",
          include: ["tests/nuxt/**/*.test.ts"],
          name: "nuxt",
        },
      }),
    ],

    // Disable watching for file changes to the tests.
    watch: false,

    // Generate a coverage report. A normal text output for the console (during
    // Development) and a JSON output (for displaying in CI environments)
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

    // Log memory leak details
    logHeapUsage: true,

    // Stop running tests after 3 failures in CI
    bail: process.env.CI ? 3 : undefined,

    // Retry thrice when a test failed in CI
    retry: process.env.CI ? 3 : 0,

    // Silence the output to STDOUT in environments other than CI
    silent: process.env.CI ? false : "passed-only",

    // Configure a context-aware reporter for better development experience (DX)
    reporters: process.env.GITHUB_ACTIONS
      ? ["dot", "github-actions"]
      : ["verbose"],
  },
});

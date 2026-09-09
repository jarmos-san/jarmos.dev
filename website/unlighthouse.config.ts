import { defineUnlighthouseConfig } from "unlighthouse/config";

export default defineUnlighthouseConfig({
  ci: {
    budget: {
      accessibility: 90,
      "best-practices": 90,
      performance: 95,
      seo: 100,
    },
    buildStatic: true,
  },
  puppeteerClusterOptions: {
    maxConcurrency: 1,
  },
  scanner: {
    samples: 5,
    throttle: true,
  },
  site: "https://jarmos.dev",
});

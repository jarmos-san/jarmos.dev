import { defineConfig } from "unlighthouse";

export default defineConfig({
  client: {
    concurrent: 1,
  },
  scanner: {
    include: ["/", "/about-me", "/blogs", "/projects"],
  },
  budgets: {
    performance: 90,
    accessibility: 95,
    "best-practices": 90,
    seo: 95,
  },
});

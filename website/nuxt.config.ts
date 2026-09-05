import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

const BASE_URL = "https://jarmos.dev";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  compatibilityDate: "2025-09-29",
  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/test-utils/module",
    "@nuxt/scripts",
    "nuxt-llms",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  llms: {
    domain: BASE_URL,
    title: "jarmos.dev",
    description: "Somraj Saha's digital garden and personal website.",
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "everforest-dark",
          langs: ["python", "javascript", "typescript", "shell", "lua", "go"],
        },
      },
    },
  },
  robots: {
    blockNonSeoBots: true,
  },
  site: {
    url: "https://jarmos.dev",
    name: "jarmos.dev",
    description:
      "I'm Jarmos - CTO at Weburz, Senior Engineer by title, open-source " +
      "hacker by heart. I design systems, mentor devs, and occasionally tame " +
      "misbehaving servers.",
    defaultLocale: "en",
  },
  ogImage: {
    enabled: false,
  },
  sitemap: {
    defaults: {
      changefreq: "monthly",
      priority: 0.7,
    },
    xslColumns: [
      {
        label: "URL",
        width: "75%",
      },
      {
        label: "Last Modified",
        select: "sitemap:lastmod",
        width: "25%",
      },
      {
        label: "Priority",
        select: "sitemap:priority",
        width: "12.5%",
      },
      {
        label: "Change Frequency",
        select: "sitemap:changefreq",
        width: "12.5%",
      },
    ],
    zeroRuntime: true,
    urls: [
      {
        loc: "/",
        lastmod: "2026-05-01",
        priority: 0.3,
        changefreq: "yearly",
      },
      {
        loc: "/about-me",
        lastmod: "2026-05-01",
        priority: 0.5,
        changefreq: "yearly",
      },
      {
        loc: "/blogs",
        lastmod: "2026-05-01",
        priority: 1,
        changefreq: "yearly",
      },
      {
        loc: "/contact-me",
        lastmod: "2026-05-01",
        priority: 0,
        changefreq: "never",
      },
      {
        loc: "/distribution-rights",
        lastmod: "2026-05-01",
        priority: 0,
        changefreq: "never",
      },
      {
        loc: "/privacy-policy",
        lastmod: "2026-05-01",
        priority: 0,
        changefreq: "never",
      },
      {
        loc: "/projects",
        lastmod: "2026-05-01",
        priority: 1,
        changefreq: "yearly",
      },
      {
        loc: "/terms-and-conditions",
        lastmod: "2026-05-01",
        priority: 0,
        changefreq: "never",
      },
    ],
  },
  $production: {
    scripts: {
      registry: {
        cloudflareWebAnalytics: {
          token: process.env.CLOUDFLARE_WEB_ANALYTICS_TOKEN ?? "",
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/rss.xml": {
      prerender: true,
    },
    "/**": {
      prerender: true,
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#00dc82",
        },
        {
          name: "theme-color",
          content: "18181b",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
  },
});

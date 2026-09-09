import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

const BASE_URL = "https://jarmos.dev";

export default defineNuxtConfig({
  $production: {
    scripts: {
      registry: {
        cloudflareWebAnalytics: {
          token: process.env.CLOUDFLARE_WEB_ANALYTICS_TOKEN ?? "",
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en-GB",
      },
      link: [
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "jarmos.dev RSS Feed",
          href: "/rss.xml",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#00dc82",
        },
        {
          name: "theme-color",
          content: "#18181b",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      titleTemplate: "%s | jarmos.dev",
    },
  },
  compatibilityDate: "2025-09-29",
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["python", "javascript", "typescript", "shell", "lua", "go"],
          theme: "everforest-dark",
        },
      },
    },
  },
  css: ["~/assets/styles/main.css"],
  devtools: {
    enabled: true,
  },
  llms: {
    description: "Somraj Saha's digital garden and personal website.",
    domain: BASE_URL,
    title: "jarmos.dev",
  },
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/test-utils/module",
    "@nuxt/scripts",
    "nuxt-llms",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  ogImage: {
    enabled: false,
  },
  robots: {
    blockNonSeoBots: true,
  },
  routeRules: {
    "/**": {
      prerender: true,
    },
    "/rss.xml": {
      prerender: true,
    },
  },
  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
    },
  },
  site: {
    defaultLocale: "en",
    description:
      "I'm Jarmos - CTO at Weburz, Senior Engineer by title, open-source " +
      "hacker by heart. I design systems, mentor devs, and occasionally tame " +
      "misbehaving servers.",
    name: "jarmos.dev",
    url: BASE_URL,
  },
  sitemap: {
    defaults: {
      changefreq: "monthly",
      priority: 0.7,
    },
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
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

<template>
  <main class="bg-[#111a20]">
    <NavBar />
    <NuxtPage />
    <AppFooter />
  </main>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (title) => {
    return title ? `${title} | jarmos.dev` : "jarmos.dev";
  },
  link: [
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "jarmos.dev RSS Feed",
      href: "/rss.xml",
    },
  ],
});
</script>

<style>
@import "~/assets/styles/main.css";
</style>

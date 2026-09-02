<template>
  <main>
    <CommonNavBar />
    <NuxtPage />
    <CommonFooter />
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
      rel: "icon",
      type: "image/svg+xml",
      href: "/icons/favicon.svg",
    },
  ],
});
</script>

<style>
@import "~/assets/styles/main.css";
</style>

<script setup lang="ts">
const title = "Home";
const description = `I'm Jarmos - CTO at Weburz, Senior Engineer by title, open-source
hacker by heart. I design systems, mentor devs, and occasionally tame misbehaving
servers.`;
const image = "/icons/favicon.svg";
const baseURL = useRuntimeConfig().public.baseURL;

// Set the title of the page
useHead({
  title: title,
});

// Set the SEO metadata for the page
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: baseURL,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});

const config = useAppConfig();

const projects = computed(() => {
  return config.projects.slice(0, 4);
});
</script>

<template>
  <article>
    <HomepageHeader />
    <HomepageProjects>
      <CommonProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :name="project.name"
        :desc="project.desc"
        :href="project.href"
        :is-experimental="project.isExperimental"
      />
    </HomepageProjects>
    <HomepageCTA />
  </article>
</template>

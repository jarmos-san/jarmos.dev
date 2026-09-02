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

    <!-- Featured project section -->
    <section class="px-5 md:px-16 lg:px-28 xl:px-56 mt-16">
      <h2 class="text-3xl font-bold text-white mb-2">Featured Projects</h2>

      <p class="text-base text-white/60 max-w-2xl mb-8">
        A selection of open-source projects I've built or contributed to — from developer tools to
        content platforms. Each one solved a real problem I or my team ran into.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <CommonProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :name="project.name"
          :desc="project.desc"
          :href="project.href"
          :is-experimental="project.isExperimental"
        />
      </div>
    </section>

    <HomepageCTA />
  </article>
</template>

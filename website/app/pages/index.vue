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

const { data: posts } = await useAsyncData("featured-posts", () => {
  return queryCollection("content")
    .select("path", "title", "publishedOn", "description", "coverImage")
    .order("publishedOn", "DESC")
    .limit(4)
    .all();
});
</script>

<template>
  <article>
    <HomepageHeader />

    <!-- Featured project section -->
    <section class="mt-12 px-5 md:mt-16 md:px-16 lg:px-28 xl:px-56">
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

    <!-- Featured blogposts section -->
    <section class="mt-12 px-5 md:mt-16 md:px-16 lg:px-28 xl:px-56">
      <h2 class="text-3xl font-bold text-white mb-2">Featured Blogposts</h2>

      <p class="text-base text-white/60 max-w-2xl mb-8">
        Thoughts on software engineering, open-source, and building products — distilled from real
        projects and hard-won lessons.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <HomepageBlogPostCard v-for="(post, index) in posts" :key="index" :post="post" />
      </div>
    </section>

    <HomepageCTA />
  </article>
</template>

<script setup lang="ts">
  import {
    computed,
    queryCollection,
    useAppConfig,
    useAsyncData,
    useRuntimeConfig,
    useSeoMeta,
  } from "#imports";

  const title = "Home";
  const description = `I'm Jarmos - CTO at Weburz, Senior Engineer by title, open-source
  hacker by heart. I design systems, mentor devs, and occasionally tame misbehaving
  servers.`;
  const { baseURL } = useRuntimeConfig().public;
  const image = `${baseURL}/icons/favicon.svg`;

  useSeoMeta({
    description,
    ogImage: image,
    ogUrl: baseURL,
    title,
    twitterCard: "summary",
    twitterImage: image,
  });

  const config = useAppConfig();

  const PROJECTS_INDICES = {
    max: 4,
    min: 0,
  };

  const projects = computed(() =>
    config.projects.slice(PROJECTS_INDICES.min, PROJECTS_INDICES.max),
  );

  const LIMIT = 4;

  const { data } = await useAsyncData("featured-posts", () =>
    queryCollection("content")
      .select("path", "title", "timestamps", "description", "coverImage")
      .limit(LIMIT)
      .all(),
  );

  const posts = computed(() =>
    data.value?.toSorted((firstTimestamp, secondTimestamp) => {
      const timeA = new Date(firstTimestamp.timestamps.publishedOn).getTime();
      const timeB = new Date(secondTimestamp.timestamps.publishedOn).getTime();
      return timeB - timeA;
    }),
  );
</script>

<template>
  <article>
    <AppHeader />

    <!-- Featured project section -->
    <section class="mt-12 px-5 md:mt-16 md:px-16 lg:px-28 xl:px-56">
      <h2 class="mb-2 text-3xl font-bold text-white">Featured Projects</h2>

      <p class="mb-8 max-w-2xl text-base text-white/60">
        A selection of open-source projects I've built or contributed to — from
        developer tools to content platforms. Each one solved a real problem I
        or my team ran into.
      </p>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <ProjectCard
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
      <h2 class="mb-2 text-3xl font-bold text-white">Featured Blogposts</h2>

      <p class="mb-8 max-w-2xl text-base text-white/60">
        Thoughts on software engineering, open-source, and building products —
        distilled from real projects and hard-won lessons.
      </p>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <BlogPostCard
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />
      </div>
    </section>

    <CTA />
  </article>
</template>

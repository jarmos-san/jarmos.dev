<script lang="ts" setup>
  import {
    useAppConfig,
    useRoute,
    useRuntimeConfig,
    useSeoMeta,
  } from "#imports";

  const { projects, seo } = useAppConfig();
  const route = useRoute();
  const {baseURL} = useRuntimeConfig().public;

  useSeoMeta({
    description: seo.projects.desc,
    ogImage: `${baseURL}${seo.projects.img}`,
    ogUrl: `${baseURL}${route.fullPath}`,
    title: seo.projects.title,
    twitterCard: "summary",
    twitterImage: `${baseURL}${seo.projects.img}`,
  });

  const pageDetails = {
    category: "OPEN-SOURCE",
    description:
      "Here you'll find a collection of projects I've built over the " +
      "years-most of them open-source and free for anyone to explore. If " +
      "something sparks your curiosity or solves a little problem of yours, " +
      "feel free to give it a spin.",
    title: "Projects",
  };
</script>

<template>
  <article class="mx-0 mt-8 mb-12 px-5 md:px-16 lg:px-28 xl:px-56">
    <!-- Hero -->
    <section
      class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 lg:p-14"
    >
      <span
        class="mb-5 inline-block rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-green-400"
      >
        {{ pageDetails.category }}
      </span>

      <h1
        class="mb-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-3xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl"
      >
        {{ pageDetails.title }}
      </h1>

      <p class="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
        {{ pageDetails.description }}
      </p>
    </section>

    <!-- Grid -->
    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :name="project.name"
        :desc="project.desc"
        :href="project.href"
        :is-experimental="project.isExperimental"
      />
    </section>
  </article>
</template>

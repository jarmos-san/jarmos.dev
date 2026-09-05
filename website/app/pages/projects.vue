<script lang="ts" setup>
const { projects, seo } = useAppConfig();
const route = useRoute();

useSeoMeta({
  title: seo.projects.title,
  description: seo.projects.desc,
  ogImage: seo.projects.img,
  ogUrl: useRuntimeConfig().public.baseURL + route.fullPath,
  twitterImage: seo.projects.img,
  twitterCard: "summary",
});

const pageDetails = {
  category: "OPEN-SOURCE",
  title: "Projects",
  description:
    "Here you'll find a collection of projects I've built over the " +
    "years-most of them open-source and free for anyone to explore. If " +
    "something sparks your curiosity or solves a little problem of yours, " +
    "feel free to give it a spin.",
};
</script>

<template>
  <article class="px-5 mx-0 md:px-16 lg:px-28 xl:px-56 mb-12 mt-8">
    <!-- Hero -->
    <section class="bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12 lg:p-14 mb-6">
      <span
        class="inline-block text-xs font-semibold tracking-wider text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-5"
      >
        {{ pageDetails.category }}
      </span>

      <h1
        class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
      >
        {{ pageDetails.title }}
      </h1>

      <p class="text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
        {{ pageDetails.description }}
      </p>
    </section>

    <!-- Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
      <CommonProjectCard
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

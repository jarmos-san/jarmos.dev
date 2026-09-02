<script lang="ts" setup>
interface Project {
  name: string;
  desc: string;
  href: string;
  isExperimental?: boolean;
}

const title = "Projects";
const description = `Explore my personal projects in software development, ecommerce
tools, and experiments at the intersection of technology and economics.`;
const baseURL = useRuntimeConfig().public.baseURL;
const image = "/icons/favicon.svg";

useHead({
  title: title,
});

useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: `${baseURL}/projects`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});

const projects: Project[] = [
  {
    name: "jarmos.dev",
    desc: `An open-source website built with Nuxt.js which doubles as my digital
    garden. It is part portfolio, part blog and part "look-what-I-just-built",
    it's always evolving as I tinker with new ideas.`,
    href: "https://github.com/Jarmos-san/jarmos.dev",
  },
  {
    name: "Crisp",
    desc: `A Go-powered commit message police which makes sure you speak the
    language of Conventional Commits--clear, structured & changelog-friendly.`,
    href: "https://github.com/Weburz/crisp",
  },
  {
    name: "BurzPage",
    desc: `A lightweight blogging CMS we use at Weburz to keep content
    flowing. It is simple, open & built to grow with us.`,
    href: "https://github.com/Weburz/burzpage",
    isExperimental: true,
  },
  {
    name: "Terox",
    desc: `A Go-based project template generator that saves us from copy-pasting
    the same boilerplate. Terox makes spinning up new projects fast &
    consistent.`,
    href: "https://github.com/Weburz/terox",
    isExperimental: true,
  },
];
</script>

<template>
  <article class="px-5 mx-0 md:px-16 lg:px-28 xl:px-56 mb-12 mt-8">
    <!-- Hero -->
    <section class="bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12 lg:p-14 mb-6">
      <span
        class="inline-block text-xs font-semibold tracking-wider text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-5"
      >
        OPEN-SOURCE
      </span>

      <h1 class="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
        Projects
      </h1>

      <p class="text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
        Here you'll find a collection of projects I've built over the years &mdash; most of them
        open-source and free for anyone to explore. If something sparks your curiosity or solves a
        little problem of yours, feel free to give it a spin.
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

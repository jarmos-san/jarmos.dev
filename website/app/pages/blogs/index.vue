<script lang="ts" setup>
// Page details
const details = {
  tagline: "blogging",
  title: "Blog",
  description:
    "A collection of articles covering software engineering, open-source contributions, " +
    "and product development — from architecture decisions to the day-to-day realities of " +
    "building and scaling. Written for developers, founders, and anyone curious about how " +
    "software gets made.",
};

const config = useRuntimeConfig();
const image = "/icons/favicon.svg";

// Set the title of the page
useHead({
  title: details.title,
});

const route = useRoute();

// Configure the SEO metadata for the page
useSeoMeta({
  description: details.description,
  ogTitle: details.title,
  ogDescription: details.description,
  ogImage: image,
  ogUrl: config.public.baseURL + route.path,
  twitterTitle: details.title,
  twitterDescription: details.description,
  twitterImage: image,
  twitterCard: "summary",
});

// Fetch the list of blog posts
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection("content")
    .select("path", "title", "publishedOn", "description", "coverImage")
    .order("publishedOn", "DESC")
    .all();
});
</script>

<template>
  <article class="px-5 md:px-16 lg:px-28 xl:px-56 mb-12 mt-8">
    <!-- Blog header -->
    <section
      class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md"
    >
      <span
        class="inline-block text-xs font-semibold tracking-wider text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-5"
      >
        {{ details.tagline.toLocaleUpperCase() }}
      </span>
      <h1
        class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
      >
        {{ details.title }}
      </h1>
      <p class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg">
        {{ details.description }}
      </p>
    </section>

    <!-- List of blogs -->
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <li v-for="(post, index) in posts" :key="index">
        <HomepageBlogPostCard :post="post" />
      </li>
    </ul>
  </article>
</template>

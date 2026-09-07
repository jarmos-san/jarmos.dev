<script lang="ts" setup>
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
  const image = `${config.public.baseURL}/icons/favicon.svg`;
  const route = useRoute();

  useSeoMeta({
    title: details.title,
    description: details.description,
    ogImage: image,
    ogUrl: config.public.baseURL + route.path,
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
  <article class="mt-8 mb-12 px-5 md:px-16 lg:px-28 xl:px-56">
    <!-- Blog header -->
    <section
      class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:p-14"
    >
      <span
        class="mb-5 inline-block rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-green-400"
      >
        {{ details.tagline.toLocaleUpperCase() }}
      </span>
      <h1
        class="mb-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-3xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl"
      >
        {{ details.title }}
      </h1>
      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        {{ details.description }}
      </p>
    </section>

    <!-- List of blogs -->
    <ul class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <li v-for="(post, index) in posts" :key="index">
        <BlogPostCard :post="post" />
      </li>
    </ul>
  </article>
</template>

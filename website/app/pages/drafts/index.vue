<script setup lang="ts">
  import {
    useSeoMeta,
    useRuntimeConfig,
    computed,
    useRoute,
    useAsyncData,
    queryCollection,
  } from "#imports";

  const details = {
    description:
      "A sneak peek into my local branch. Explore my unreleased " +
      "tech articles, draft notes, and upcoming posts before they're " +
      "officially published.",
    tagline: "blogposts",
    title: "Drafts",
  };

  const config = useRuntimeConfig();
  const image = `${config.public.baseURL}/icons/favicon.svg`;
  const route = useRoute();

  useSeoMeta({
    description: details.description,
    ogImage: image,
    ogUrl: config.public.baseURL + route.path,
    title: details.title,
    twitterCard: "summary",
    twitterImage: image,
  });

  // Fetch the list of (draft) blog posts
  const { data } = await useAsyncData(route.path, () =>
    queryCollection("content")
      .select(
        "path",
        "title",
        "timestamps",
        "description",
        "coverImage",
        "status",
      )
      .where("status", "=", "draft")
      .all(),
  );

  const posts = computed(() =>
    data.value?.toSorted((firstValue, secondValue) => {
      const firstTimestamp = new Date(
        firstValue.timestamps.publishedOn,
      ).getTime();
      const secondTimestamp = new Date(
        secondValue.timestamps.publishedOn,
      ).getTime();

      return secondTimestamp - firstTimestamp;
    }),
  );
</script>

<template>
  <article class="mt-8 mb-12 px-5 md:px-16 lg:px-28 xl:px-56">
    <!-- Page header -->
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

    <!-- List of drafts -->
    <ul
      v-if="posts != undefined && posts.length > 0"
      class="grid grid-cols-1 gap-6 lg:grid-cols-2"
    >
      <li v-for="(post, index) in posts" :key="index">
        <BlogPostCard :post="post" />
      </li>
    </ul>

    <!-- Empty State -->
    <section
      v-else
      class="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-md md:py-24"
    >
      <!-- Subtle Document Icon -->
      <Icon
        name="material-symbols:edit-document"
        size="3rem"
        class="bg-white/50"
      />

      <h3 class="mb-2 text-xl font-semibold text-[#ecf8ff]/90">
        No drafts available
      </h3>

      <p class="max-w-sm text-base text-[#ecf8ff]/60">
        Zero uncommitted thoughts in my local branch! Whenever I start drafting
        my next post, you'll spot it right here before it hits main.
      </p>
    </section>
  </article>
</template>

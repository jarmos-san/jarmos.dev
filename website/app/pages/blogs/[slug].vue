<script setup lang="ts">
  import { Separator } from "reka-ui";

  import {
    computed,
    queryCollection,
    useAsyncData,
    useRoute,
    useRuntimeConfig,
    useSeoMeta,
    useTimeAgo,
    reactive,
  } from "#imports";

  const route = useRoute();
  const { data: post } = await useAsyncData(route.path, () =>
    queryCollection("content")
      .select("title", "description", "coverImage", "timestamps", "body")
      .path(route.path)
      .first(),
  );

  const title = post.value?.title;
  const { baseURL } = useRuntimeConfig().public;
  const description = post.value?.description;

  const image = post.value?.coverImage?.url;
  const url = `${baseURL}/${route.path}`;

  useSeoMeta({
    description,
    ogImage: image,
    ogUrl: url,
    title: title ?? "Not Found",
    twitterCard: "summary_large_image",
    twitterImage: image,
  });

  const formatTimestamp = (dateInput?: string | Date): string | undefined => {
    if (!dateInput) {
      return;
    }

    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateInput));
  };

  const timestamps = reactive({
    published: {
      formatted: computed(() =>
        formatTimestamp(post.value?.timestamps?.publishedOn),
      ),
      timeAgo: useTimeAgo(() => post.value?.timestamps?.publishedOn ?? ""),
    },
    updated: {
      formatted: computed(() =>
        formatTimestamp(post.value?.timestamps?.updatedOn),
      ),
      timeAgo: useTimeAgo(() => post.value?.timestamps?.updatedOn ?? ""),
    },
  });

  const SLICE_INDEX_MIN = 0;
  const SLICE_INDEX_MAX = 3;

  const COUNTER = 1;
  const RESET = 0;

  const { data: relatedPosts } = await useAsyncData(
    "related-posts",
    async () => {
      const all = await queryCollection("content")
        .select("path", "title", "timestamps", "description", "coverImage")
        .all();

      const candidates = all.filter((part) => part.path !== route.path);

      for (let idx = candidates.length - COUNTER; idx > RESET; idx -= COUNTER) {
        const rng = Math.floor(Math.random() * (idx + COUNTER));

        const currentItem = candidates[idx];
        const randomItem = candidates[rng];

        if (currentItem !== undefined && randomItem !== undefined) {
          candidates[idx] = randomItem;
          candidates[rng] = currentItem;
        }
      }

      return candidates.slice(SLICE_INDEX_MIN, SLICE_INDEX_MAX);
    },
  );
</script>

<template>
  <article class="mt-8 mb-12 px-5 md:px-16 lg:px-28 xl:px-56">
    <template v-if="post">
      <!-- Hero card -->
      <section
        class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:p-14"
      >
        <!-- Timestamps (published on & updated on) -->
        <div
          v-if="post.timestamps.publishedOn"
          class="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] font-medium tracking-wider"
        >
          <span class="inline-flex items-center gap-1.5 text-[#7ab6d9]">
            <Icon
              name="material-symbols:calendar-month"
              class="size-3.5 opacity-70"
            />
            <time :datetime="timestamps.published.formatted">
              Published on {{ timestamps.published.formatted }} ({{
                timestamps.published.timeAgo
              }})
            </time>
          </span>

          <template v-if="post.timestamps.updatedOn">
            <Separator
              orientation="vertical"
              class="mx-0.5 h-3 w-px bg-white/20"
            />

            <span class="inline-flex items-center gap-1.5 text-[#7ab6d9]/60">
              <Icon name="mdi:calendar-refresh" class="size-3.5 opacity-70" />
              <time :datetime="timestamps.updated.formatted">
                Updated on {{ timestamps.updated.formatted }} ({{
                  timestamps.updated.timeAgo
                }})</time
              >
            </span>
          </template>
        </div>

        <!-- Title -->
        <h1
          class="mb-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-3xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl"
        >
          {{ post.title }}
        </h1>

        <!-- Description -->
        <p
          class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
        >
          {{ post.description }}
        </p>

        <!-- Cover image -->
        <NuxtImg
          :src="post.coverImage.url"
          :alt="post.coverImage.alt ?? ''"
          class="mt-6 aspect-video w-full rounded-xl border border-white/10 object-cover"
        />
      </section>

      <!-- Blog content -->
      <section
        class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:p-14"
      >
        <ContentRenderer :value="post" class="text-[#ecf8ff]" />
      </section>

      <!-- Related posts -->
      <section class="mt-12">
        <Separator
          class="mb-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
        />
        <h2 class="mb-6 text-xl font-semibold text-white/90">
          Continue Reading...
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogPostCard
            v-for="post in relatedPosts"
            :key="post.path"
            :post="post"
          />
        </div>
      </section>
    </template>

    <!-- Fallback: post not found -->
    <template v-else>
      <section
        class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:p-12 lg:p-14"
      >
        <h1
          class="bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-3xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl"
        >
          Post not found
        </h1>
        <p class="mt-4 text-base text-white/70">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <NuxtLink
          to="/blogs"
          class="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-green-300/20 bg-green-300/10 px-4 py-2 text-sm font-medium text-green-300 transition-all duration-200 hover:border-green-300/30 hover:bg-green-300/20"
        >
          Back to Blog
          <Icon name="material-symbols:arrow-outward" size="1rem" />
        </NuxtLink>
      </section>
    </template>
  </article>
</template>

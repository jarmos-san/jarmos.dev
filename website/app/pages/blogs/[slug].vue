<script setup lang="ts">
  import {
    computed,
    queryCollection,
    useAsyncData,
    useRoute,
    useRuntimeConfig,
    useSeoMeta,
  } from "#imports";

  const route = useRoute();
  const { data: post } = await useAsyncData(route.path, () =>
    queryCollection("content").path(route.path).first(),
  );

  const title = post.value?.title;
  const { baseURL } = useRuntimeConfig().public;
  const description = post.value?.description;
  const image = post.value?.coverImage.url;
  const url = `${baseURL}/${route.path}`;

  useSeoMeta({
    description,
    ogImage: image,
    ogUrl: url,
    title: title ?? "Not Found",
    twitterCard: "summary_large_image",
    twitterImage: image,
  });

  // Compute and cache the publication date
  const publishedOn = computed(() =>
    post.value?.publishedOn
      ? new Date(post.value.publishedOn).toLocaleDateString("en", {
          day: "numeric",
          month: "long",
          weekday: "long",
          year: "numeric",
        })
      : "",
  );
</script>

<template>
  <article class="mt-8 mb-12 px-5 md:px-16 lg:px-28 xl:px-56">
    <template v-if="post">
      <!-- Hero card -->
      <section
        class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:p-14"
      >
        <!-- Published date -->
        <span
          class="mb-4 inline-block text-xs font-semibold tracking-wide text-[#7ab6d9]"
        >
          {{ publishedOn }}
        </span>

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

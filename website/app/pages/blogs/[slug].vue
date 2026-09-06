<template>
  <article class="px-5 md:px-16 lg:px-28 xl:px-56 mb-12 mt-8">
    <template v-if="post">
      <!-- Hero card -->
      <section
        class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md"
      >
        <!-- Published date -->
        <span
          class="inline-block text-xs font-semibold tracking-wide text-[#7ab6d9] mb-4"
        >
          {{ publishedOn }}
        </span>

        <!-- Title -->
        <h1
          class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
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
          class="w-full mt-6 aspect-video object-cover rounded-xl border border-white/10"
        />
      </section>

      <!-- Blog content -->
      <section
        class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 backdrop-blur-md"
      >
        <ContentRenderer :value="post" />
      </section>
    </template>

    <!-- Fallback: post not found -->
    <template v-else>
      <section
        class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 backdrop-blur-md text-center"
      >
        <h1
          class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl"
        >
          Post not found
        </h1>
        <p class="mt-4 text-base text-white/70">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <NuxtLink
          to="/blogs"
          class="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-green-300 bg-green-300/10 border border-green-300/20 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-300/20 hover:border-green-300/30"
        >
          Back to Blog
          <Icon name="material-symbols:arrow-outward" size="1rem" />
        </NuxtLink>
      </section>
    </template>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first(),
);

const title = post.value?.title;
const baseURL = useRuntimeConfig().public.baseURL;
const description = post.value?.description;
const image = post.value?.coverImage.url;
const url = `${baseURL}/${route.path}`;

useSeoMeta({
  title: title ?? "Not Found",
  description,
  ogImage: image,
  ogUrl: url,
  twitterImage: image,
  twitterCard: "summary_large_image",
});

// Compute and cache the publication date
const publishedOn = computed(() =>
  post.value?.publishedOn
    ? new Date(post.value.publishedOn).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "",
);
</script>

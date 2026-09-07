<script lang="ts" setup>
interface CoverImage {
  url: string;
  alt?: string;
}

interface Post {
  title: string;
  description: string;
  path: string;
  publishedOn: string;
  coverImage: CoverImage;
}

interface Props {
  post: Post;
}

const props = defineProps<Props>();

const publishedOn = computed(() => {
  return new Date(props.post.publishedOn).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
});
</script>

<template>
  <NuxtLink
    :to="props.post.path"
    class="group h-full flex flex-col justify-between gap-3 p-7 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md no-underline overflow-hidden transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:shadow-xl"
  >
    <!-- Date -->
    <span class="text-xs font-semibold tracking-wide text-[#7ab6d9]">{{ publishedOn }}</span>

    <!-- Title -->
    <h3 class="text-xl font-semibold text-white leading-snug">
      {{ props.post.title }}
    </h3>

    <!-- Cover image -->
    <NuxtImg
      :src="props.post.coverImage.url"
      :alt="props.post.coverImage.alt"
      class="w-full aspect-video object-cover rounded-lg border border-white/10"
    />

    <!-- Description -->
    <p class="text-sm leading-7 font-medium text-white/60 line-clamp-3">
      {{ props.post.description }}
    </p>

    <!-- CTA -->
    <span
      class="inline-flex items-center gap-1.5 text-sm font-medium text-green-300 bg-green-300/10 border border-green-300/20 px-4 py-2 rounded-lg w-fit transition-all duration-200 group-hover:bg-green-300/ 20 group-hover:border-green-300/30"
    >
      Read more
      <Icon name="material-symbols:arrow-outward" size="1rem" />
    </span>
  </NuxtLink>
</template>

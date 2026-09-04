<script lang="ts" setup>
interface BlogPost {
  title: string;
  description: string;
  path: string;
  publishedOn: string;
  coverImage: string;
}

const props = defineProps<BlogPost>();

const publishedOn = computed(() => {
  return new Date(props.publishedOn).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});
</script>

<template>
  <NuxtLink
    :to="props.path"
    class="h-full flex flex-col justify-between gap-3 p-7 bg-white/5 border border-white/10 rounded-xl no-underline transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:shadow-xl"
  >
    <!-- Date -->
    <span class="text-xs font-semibold tracking-wide text-[#7ab6d9]">{{ publishedOn }}</span>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-white">{{ props.title }}</h3>

    <!-- Cover image -->
    <NuxtImg :src="props.coverImage" />

    <!-- Description -->
    <p class="text-sm leading-7 font-medium text-white/60">
      {{ props.description }}
    </p>

    <span>Read more...</span>
  </NuxtLink>
</template>

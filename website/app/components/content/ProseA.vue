<template>
  <NuxtLink :href="props.href" :target="props.target ?? undefined">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface ProseAProps {
  href?: string;
  target?:
    | "_blank"
    | "_parent"
    | "_self"
    | "_top"
    | (string & object)
    | null
    | undefined;
}

const props = defineProps<ProseAProps>();
</script>

<style lang="scss" scoped>
a {
  text-underline-offset: 0.18rem;
}
</style>

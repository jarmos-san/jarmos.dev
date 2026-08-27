<template>
  <NuxtLink :to="props.href" class="link">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface NavLinkProps {
  /** href represents the hyperlink to an internal URL. */
  href: string;
}

const props = defineProps<NavLinkProps>();
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  text-decoration: none;
  padding-bottom: 0.25rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>

<template>
  <NuxtLink
    :href="props.href"
    :target="props.target ?? undefined"
    class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
  >
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

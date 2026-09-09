<script setup lang="ts">
  import { useRuntimeConfig, computed } from "#imports";

  interface ProseH3Props {
    id?: string;
  }

  const props = defineProps<ProseH3Props>();

  const { headings } = useRuntimeConfig().public.mdc;

  const generate = computed(
    () =>
      props.id &&
      ((typeof headings?.anchorLinks === "boolean" &&
        headings?.anchorLinks === true) ||
        (typeof headings?.anchorLinks === "object" &&
          headings?.anchorLinks?.h3)),
  );
</script>

<template>
  <h3 :id="props.id" class="mt-10 mb-3 text-xl font-bold text-[#ecf8ff]">
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      class="text-[#ecf8ff] no-underline"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

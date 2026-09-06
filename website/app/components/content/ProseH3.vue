<template>
  <h3 :id="props.id" class="text-xl font-bold mt-10 mb-3 text-[#ecf8ff]">
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

<script setup lang="ts">
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
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h3)),
);
</script>

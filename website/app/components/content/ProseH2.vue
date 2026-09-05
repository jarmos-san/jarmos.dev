<template>
  <h2
    :id="props.id"
    class="text-[1.625rem] font-bold mt-16 mb-4 text-[#ecf8ff]"
  >
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
      class="text-[#ecf8ff] no-underline"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
interface ProseH2Props {
  id?: string;
}

const props = defineProps<ProseH2Props>();

const { headings } = useRuntimeConfig().public.mdc;

const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h2)),
);
</script>

<template>
  <div
    class="my-6 overflow-hidden rounded-lg border border-white/10 bg-[#1c2c35]"
  >
    <!-- Filename header -->
    <div
      v-if="props.filename"
      class="border-b border-white/10 bg-[#2a2a2a] px-3 py-1.5 font-mono text-sm text-white/60"
    >
      {{ props.filename }}
    </div>

    <!-- Code body -->
    <div class="px-3 py-4">
      <pre
        :class="[props.class, 'scrollbar-thin overflow-x-auto pb-2']"
      ><slot /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface ProsePreProps {
    /**
     * @description The raw code content to be rendered which will render an empty block if
     * omitted.
     */
    code?: string;

    /**
     * @description The language identifier used for syntax highlighting using Shiki. If `null`
     * or `undefined` then no syntax highlighting is applied.
     */
    language?: string | null;

    /**
     * @description Optional file name to display above the code block. If `null` then no file
     * names are rendered above the code block.
     */
    filename?: string | null;

    /** @description The list of line numbers to highlight in the code block. */
    highlights?: number[];

    /**
     * @description Metadata string extracted from the code fence for manipulating the
     * rendering behaviour of the code blocks.
     */
    meta?: string | null;

    /** @description Additional CSS class names to apply to the container element. */
    class?: string | null;
  }

  const props = defineProps<ProsePreProps>();
</script>

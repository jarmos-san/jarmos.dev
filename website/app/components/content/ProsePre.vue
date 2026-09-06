<template>
  <div
    class="border border-white/10 rounded-lg overflow-hidden bg-[#1c2c35] my-6"
  >
    <!-- Filename header -->
    <div
      v-if="props.filename"
      class="bg-[#2a2a2a] px-3 py-1.5 text-sm font-mono text-white/60 border-b border-white/10"
    >
      {{ props.filename }}
    </div>

    <!-- Code body -->
    <div class="py-4 px-3">
      <pre :class="[props.class, 'overflow-x-auto scrollbar-thin pb-2']"><slot /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProsePreProps {
  /** The raw code content to be rendered which will render an empty block if omitted. */
  code?: string;

  /** The language identifier used for syntax highlighting using Shiki. If `null` or `undefined` then no syntax highlighting is applied. */
  language?: string | null;

  /** Optional file name to display above the code block. If `null` then no file names are rendered above the code block. */
  filename?: string | null;

  /** The list of line numbers to highlight in the code block. */
  highlights?: number[];

  /** Metadata string extracted from the code fence for manipulating the rendering behaviour of the code blocks. */
  meta?: string | null;

  /** Additional CSS class names to apply to the container element. */
  class?: string | null;
}

const props = defineProps<ProsePreProps>();
</script>

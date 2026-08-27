<template>
  <div class="code-wrapper">
    <!-- Add filename header -->
    <div v-if="props.filename" class="code-header">
      {{ props.filename }}
    </div>

    <!-- Call the original template -->
    <div class="code-body">
      <pre :class="props.class"><slot /></pre>
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

<style scoped lang="scss">
.code-wrapper {
  border: 1px solid #333;
  border-radius: 6px;
  overflow: hidden;
  background: #1c2c35;

  pre code .line {
    display: block;
  }

  .code-header {
    background: #2a2a2a;
    padding: 6px 10px;
    font-size: 0.8rem;
    font-family: monospace;
    color: #ccc;
    border-bottom: 1px solid #333;
  }

  .code-body {
    padding: 1rem 0.8rem;
  }
}
</style>

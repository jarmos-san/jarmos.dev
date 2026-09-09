<script lang="ts" setup>
  import { computed } from "#imports";

  interface Project {
    name: string;
    desc: string;
    href: string;
    isExperimental?: boolean;
  }

  const props = defineProps<Project>();

  const borderColors = [
    "#FF5733",
    "#FF8D1A",
    "#FFC300",
    "#DAF7A6",
    "#28B463",
    "#17A589",
    "#2E86C1",
    "#5B2C6F",
    "#C70039",
    "#900C3F",
    "#F39C12",
    "#8E44AD",
    "#E74C3C",
    "#1ABC9C",
    "#2C3E50",
    "#F1C40F",
    "#9B59B6",
    "#34495E",
    "#7D3C98",
    "#16A085",
  ];

  const hashStringToNumber = (str: string): number => {
    let hash = 0;

    const INCREMENT = 1;
    const HASH_LENGTH = 5;
    const HASH_NULL = 0;

    for (let idx = 0; idx < str.length; idx += INCREMENT) {
      hash = Math.trunc(
        Number(hash < HASH_LENGTH) -
          hash +
          Number(str ? HASH_NULL : str.codePointAt(idx)),
      );
    }

    return Math.abs(hash);
  };

  const getBorderColor = (name: string): string | undefined => {
    const hash = hashStringToNumber(name);
    const index = hash % borderColors.length;
    return borderColors[index];
  };

  const iconColour = computed(() => getBorderColor(props.name));
</script>

<template>
  <section
    class="flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-7 transition-all duration-200 hover:border-white/15 hover:bg-white/10 hover:shadow-xl"
  >
    <!-- Project name -->
    <div class="flex items-center gap-2.5">
      <span
        class="h-2.5 w-2.5 shrink-0 rounded-full"
        :style="{ backgroundColor: iconColour }"
      />
      <span class="text-lg font-semibold text-white">{{ props.name }}</span>
      <span
        v-if="props.isExperimental"
        class="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-xs leading-none font-semibold tracking-wide text-amber-500"
      >
        WIP
      </span>
    </div>

    <!-- Description -->
    <p class="text-sm leading-7 font-medium text-white/60">{{ props.desc }}</p>

    <!-- Repository -->
    <a
      :href="props.href"
      class="inline-flex w-fit items-center gap-1.5 rounded-lg border border-green-300/20 bg-green-300/10 px-4 py-2 text-sm font-normal text-green-300 no-underline transition-all duration-200 hover:border-green-300/30 hover:bg-green-300/20"
      target="_blank"
    >
      Source Code
      <Icon name="material-symbols:arrow-outward" size="1rem" />
    </a>
  </section>
</template>

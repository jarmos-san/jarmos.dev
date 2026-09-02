<script lang="ts" setup>
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
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const getBorderColor = (name: string): string | undefined => {
  const hash = hashStringToNumber(name);
  const index = hash % borderColors.length;
  return borderColors[index];
};

const iconColour = computed(() => {
  return getBorderColor(props.name);
});
</script>

<template>
  <section
    class="flex flex-col justify-between gap-3 p-7 bg-white/5 border border-white/10 rounded-xl transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:shadow-xl"
  >
    <!-- Project name -->
    <div class="flex items-center gap-2.5">
      <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="{ backgroundColor: iconColour }" />
      <span class="text-lg font-semibold text-white">{{ props.name }}</span>
      <span
        v-if="props.isExperimental"
        class="text-xs font-semibold tracking-wide text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full leading-none"
      >
        WIP
      </span>
    </div>

    <!-- Description -->
    <p class="text-sm leading-7 text-white/60 font-medium">{{ props.desc }}</p>

    <!-- Repository -->
    <a
      :href="props.href"
      class="inline-flex items-center gap-1.5 text-sm font-normal text-green-300 bg-green-300/10 border border-green-300/20 px-4 py-2 rounded-lg w-fit transition-all duration-200 no-underline hover:bg-green-300/20 hover:border-green-300/30"
      target="_blank"
    >
      Source Code
      <Icon name="material-symbols:arrow-outward" size="1rem" />
    </a>
  </section>
</template>

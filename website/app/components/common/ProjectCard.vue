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

const borderColor = getBorderColor(props.name);
</script>

<template>
  <div class="card">
    <div class="card-header">
      <span class="accent-dot" :style="{ backgroundColor: borderColor }" />
      <span class="project-name">{{ props.name }}</span>
      <span v-if="props.isExperimental" class="wip-badge">WIP</span>
    </div>
    <p class="project-desc">{{ props.desc }}</p>
    <a :href="props.href" class="card-link" target="_blank">
      Source Code
      <Icon name="material-symbols:arrow-outward" size="1rem" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.accent-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.project-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ecf8ff;
}

.wip-badge {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #f39c12;
  background: rgba(243, 156, 18, 0.12);
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(243, 156, 18, 0.2);
  line-height: 1;
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(236, 248, 255, 0.65);
  font-weight: 400;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #b0fbbc;
  background: rgba(176, 251, 188, 0.08);
  border: 1px solid rgba(176, 251, 188, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background: rgba(176, 251, 188, 0.14);
    border-color: rgba(176, 251, 188, 0.3);
  }
}
</style>

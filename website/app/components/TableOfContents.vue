<script setup lang="ts">
  import {
    ref,
    onMounted,
    onUnmounted,
    useIntersectionObserver,
  } from "#imports";

  interface TocLink {
    id: string;
    text: string;
    depth: number;
    children?: TocLink[];
  }

  interface Props {
    links: TocLink[];
  }

  const props = defineProps<Props>();

  const activeId = ref("");
  let observers: (() => void)[] = [];

  onMounted(() => {
    // Query headings rendered inside the main content component
    const headings = document.querySelectorAll<HTMLHeadingElement>(
      "article h2, article h3",
    );

    for (const heading of headings) {
      const { stop } = useIntersectionObserver(
        heading,
        (entries) => {
          const FIRST_INDEX = 0;
          if (entries[FIRST_INDEX]?.isIntersecting) {
            activeId.value = heading.id;
          }
        },
        { rootMargin: "-80px 0px -50% 0px" },
      );
      observers.push(stop);
    }
  });

  onUnmounted(() => {
    for (const stop of observers) {
      stop();
    }
  });
</script>

<template>
  <aside class="lg:sticky lg:top-8 lg:order-last lg:self-start">
    <nav>
      <h2 class="mb-3 text-xl font-semibold text-white/90">
        Table of Contents
      </h2>
      <ul class="ml-4 text-white/60">
        <li v-for="link in links" :key="link.id" class="my-2 list-disc">
          <NuxtLink
            :to="`#${link.id}`"
            class="transition-colors duration-200"
            :class="
              activeId === link.id
                ? 'font-semibold text-[#b0fbbc]'
                : 'text-white/60 hover:text-white/90'
            "
          >
            {{ link.text }}
          </NuxtLink>
          <ul v-if="link.children">
            <li
              v-for="child in link.children"
              :key="child.id"
              class="my-2 ml-7 list-disc text-sm"
            >
              <NuxtLink
                :to="`#${child.id}`"
                class="transition-colors duration-200"
                :class="
                  activeId === child.id
                    ? 'font-semibold text-[#b0fbbc]'
                    : 'text-white/60 hover:text-white/90'
                "
              >
                {{ child.text }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

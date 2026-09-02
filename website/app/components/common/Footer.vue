<script setup lang="ts">
const details = {
  logo: "/icons/favicon.svg",
  columns: ["Navigate", "Legal", "Connect"],
};

const { socialLinks, legalLinks, navLinks } = useAppConfig();

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <footer
    role="contentinfo"
    class="mx-5 md:mx-16 lg:mx-28 xl:mx-56 mb-8 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg"
  >
    <!-- Top: Logo + Copyright -->
    <section class="flex items-center gap-3 mb-8">
      <img :src="details.logo" alt="" width="70" height="70" />
      <p class="text-xs text-white/40">
        <span>Built with Open-Source ❤️ | &copy; 2018-{{ currentYear }}</span>
      </p>
    </section>

    <!-- Columns -->
    <section class="grid grid-cols-2 md:grid-cols-3 gap-8">
      <!-- Navigate -->
      <div>
        <h3 class="text-sm font-semibold text-white/60 mb-3">{{ details.columns[0] }}</h3>
        <ul class="flex flex-col gap-2 list-none p-0">
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              :to="link.href"
              class="text-sm text-white/50 hover:text-green-200 hover:bg-white/10 py-1.5 rounded-lg transition-all duration-200"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="text-sm font-semibold text-white/60 mb-3">{{ details.columns[1] }}</h3>
        <ul class="flex flex-col gap-2 list-none p-0">
          <li v-for="(link, index) in legalLinks" :key="index">
            <NuxtLink
              :to="link.href"
              class="text-sm text-white/50 hover:text-green-200 hover:bg-white/10 py-1.5 rounded-lg transition-all duration-200"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h3 class="text-sm font-semibold text-white/60 mb-3">{{ details.columns[2] }}</h3>
        <ul class="flex flex-col gap-2 list-none">
          <li v-for="(link, index) in socialLinks" :key="index">
            <a
              :href="link.href"
              target="_blank"
              :aria-label="link.name"
              class="flex gap-2 items-center text-sm text-white/50 hover:text-green-200 py-1.5 transition-all duration-200"
            >
              <Icon size="1.5rem" :name="link.icon" />
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

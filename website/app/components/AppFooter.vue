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
    class="mx-5 mb-8 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md md:mx-16 lg:mx-28 xl:mx-56"
  >
    <!-- Top: Logo + Copyright -->
    <section class="mb-8 flex items-center gap-3">
      <img :src="details.logo" alt="" width="70" height="70" />
      <p class="text-xs text-white/40">
        <span>Built with Open-Source ❤️ | &copy; 2018-{{ currentYear }}</span>
      </p>
    </section>

    <!-- Columns -->
    <section class="grid grid-cols-2 gap-8 md:grid-cols-3">
      <!-- Navigate -->
      <div>
        <h3 class="mb-3 text-sm font-semibold text-white/60">
          {{ details.columns[0] }}
        </h3>
        <ul class="flex list-none flex-col gap-2 p-0">
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              :to="link.href"
              class="rounded-lg py-1.5 text-sm text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-green-200"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="mb-3 text-sm font-semibold text-white/60">
          {{ details.columns[1] }}
        </h3>
        <ul class="flex list-none flex-col gap-2 p-0">
          <li v-for="(link, index) in legalLinks" :key="index">
            <NuxtLink
              :to="link.href"
              class="rounded-lg py-1.5 text-sm text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-green-200"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h3 class="mb-3 text-sm font-semibold text-white/60">
          {{ details.columns[2] }}
        </h3>
        <ul class="flex list-none flex-col gap-2">
          <li v-for="(link, index) in socialLinks" :key="index">
            <a
              :href="link.href"
              target="_blank"
              :aria-label="link.name"
              class="flex items-center gap-2 py-1.5 text-sm text-white/50 transition-all duration-200 hover:text-green-200"
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

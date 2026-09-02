<script setup lang="ts">
interface Link {
  label: string;
  href: string;
}

interface NavLink extends Link {
  label: "Home" | "About" | "Blogs" | "Projects";
}

interface LegalDoc extends Link {
  label: "Terms and Conditions" | "Distribution Rights" | "Privacy Policy";
  href: "/terms-and-conditions" | "/distribution-rights" | "/privacy-policy";
}

interface FooterProps {
  /** The (optional) navigation links. */
  navLinks?: NavLink[];
  /** The (optional) links to the legal documents. */
  legalDocs?: LegalDoc[];
  /** The logo to render on the footer. */
  logo?: string;
}

const props = defineProps<FooterProps>();
</script>

<template>
  <footer
    role="contentinfo"
    class="mx-5 md:mx-16 lg:mx-28 xl:mx-56 mb-8 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg"
  >
    <!-- Top: Logo + Copyright -->
    <div class="flex items-center gap-3 mb-8">
      <img :src="props.logo" alt="jarmos.dev" width="40" height="40" />
      <p class="text-xs text-white/40">
        <slot />
      </p>
    </div>

    <!-- Columns -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
      <!-- Navigate -->
      <div>
        <h3 class="text-sm font-semibold text-white/60 mb-3">Navigate</h3>
        <ul class="flex flex-col gap-2 list-none p-0">
          <li v-for="(link, index) in props.navLinks" :key="index">
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
        <h3 class="text-sm font-semibold text-white/60 mb-3">Legal</h3>
        <ul class="flex flex-col gap-2 list-none p-0">
          <li v-for="(doc, index) in props.legalDocs" :key="index">
            <NuxtLink
              :to="doc.href"
              class="text-sm text-white/50 hover:text-green-200 hover:bg-white/10 py-1.5 rounded-lg transition-all duration-200"
            >
              {{ doc.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h3 class="text-sm font-semibold text-white/60 mb-3">Connect</h3>
        <ul class="flex flex-col gap-2 list-none p-0">
          <li>
            <a
              href="mailto:contact@jarmos.dev"
              class="text-sm text-white/50 hover:text-green-200 hover:bg-white/10 py-1.5 rounded-lg transition-all duration-200"
            >
              contact@jarmos.dev
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

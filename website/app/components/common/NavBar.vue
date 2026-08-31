<script lang="ts" setup>
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  VisuallyHidden,
} from "reka-ui";

const isDesktop = useMediaQuery("(min-width: 768px)");
const open = ref(false);
const route = useRoute();

const { socialLinks, navLinks } = useAppConfig();
</script>

<template>
  <nav class="flex justify-between items-center px-8 pt-10 md:px-16 lg:px-28 xl:px-56">
    <!-- Logo -->
    <div>
      <img src="/icons/logo.svg" alt="logo" height="70" width="70" />
    </div>
    <!-- Desktop navigation menu -->
    <div v-if="isDesktop">
      <div
        class="flex items-center gap-1.5 bg-white/3 border border-white/10 p-1.5 rounded-full backdrop-blur-md"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.href"
          :aria-label="link.label"
          :aria-current="route.path === link.href ? 'page' : undefined"
          :class="[
            'px-4 py-2 rounded-full text-md font-medium transition-all duration-200',
            route.path === link.href
              ? 'text-green-200 bg-white/10 shadow-sm'
              : 'text-[#ecf8ff]/80 hover:text-green-200 hover:bg-white/10 hover:shadow-sm',
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile navigation menu -->
    <DrawerRoot v-else v-model:open="open" swipe-direction="right">
      <!-- Hamburger menu item -->
      <DrawerTrigger
        aria-label="Open navigation"
        class="p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
      >
        <Icon name="material-symbols:menu" size="1.75rem" />
      </DrawerTrigger>

      <!-- Vue portal which renders the modal -->
      <DrawerPortal>
        <DrawerOverlay class="overlay fixed inset-0 z-30 bg-black/90" />
        <DrawerContent
          class="content fixed right-0 top-0 z-100 flex h-full w-full max-w-sm flex-col rounded-l-2xl bg-[#162028] shadow-[-4px_0_24px_rgba(0,0,0,0.4)] outline-none"
        >
          <!-- Close button, nav links, social links — evenly spaced -->
          <div class="flex-1 flex flex-col items-center justify-between px-6 py-8">
            <DrawerClose
              aria-label="Close navigation"
              class="p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
            >
              <Icon name="material-symbols:close" size="1.5rem" />
            </DrawerClose>

            <div class="flex flex-col items-center gap-5">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.label"
                :to="link.href"
                :class="[
                  'text-2xl font-medium tracking-wide transition-colors duration-200 hover:text-green-200',
                  route.path === link.href
                    ? 'text-green-200 border-l-2 border-green-200 pl-4 -ml-4.5'
                    : 'text-[#ecf8ff]',
                ]"
                @click="open = false"
              >
                {{ link.label }}
              </NuxtLink>
            </div>

            <div class="flex justify-center gap-2">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.href"
                target="_blank"
                :aria-label="link.name"
                class="p-2 rounded-lg text-[#ecf8ff]/70 transition-colors duration-200 hover:text-green-200 hover:bg-white/10"
              >
                <Icon size="1.5rem" :name="link.icon" />
              </a>
            </div>
          </div>

          <!-- Required by Reka UI for accessibility: provides accessible name for the drawer -->
          <VisuallyHidden>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription>Browse the site sections</DrawerDescription>
          </VisuallyHidden>
        </DrawerContent>
      </DrawerPortal>
    </DrawerRoot>
  </nav>
</template>

<style>
.overlay[data-state="open"] {
  animation: mobile-nav-overlay-in 300ms cubic-bezier(0.32, 0.72, 0, 1);
}

.overlay[data-state="closed"] {
  animation: mobile-nav-overlay-out 300ms cubic-bezier(0.32, 0.72, 0, 1);
}

@keyframes mobile-nav-overlay-in {
  from {
    opacity: 0;
  }
}

@keyframes mobile-nav-overlay-out {
  to {
    opacity: 0;
  }
}

.content[data-state="open"] {
  animation: slide-in-right 300ms ease;
}

.content[data-state="closed"] {
  animation: slide-out-right 300ms ease;
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
}

@keyframes slide-out-right {
  to {
    transform: translateX(100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .overlay[data-state="open"],
  .overlay[data-state="closed"],
  .content[data-state="open"],
  .content[data-state="closed"] {
    animation: none;
  }
}
</style>

<script lang="ts" setup>
import {
  DrawerContent,
  DrawerHandle,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
  VisuallyHidden,
  DrawerTitle,
  DrawerDescription,
} from "reka-ui";

const isDesktop = useMediaQuery("(min-width: 640px)");
const open = ref(false);

const { socialLinks, navLinks } = useAppConfig();
</script>

<template>
  <nav class="flex justify-between px-8 pt-10">
    <!-- Logo -->
    <div>
      <img src="/icons/logo.svg" alt="logo" height="70" width="70" />
    </div>
    <!-- Desktop navigation menu -->
    <div v-if="isDesktop">Desktop Navigation Menu</div>

    <!-- Mobile navigation menu -->
    <DrawerRoot v-else v-model:open="open" swipe-direction="right">
      <!-- Hamburger menu item -->
      <DrawerTrigger aria-label="Open navigation">
        <Icon name="material-symbols:menu" size="2rem" />
      </DrawerTrigger>

      <!-- Vue portal which renders the modal -->
      <DrawerPortal>
        <DrawerOverlay class="overlay fixed inset-0 z-30 bg-black/90" />
        <DrawerContent
          class="content fixed right-0 top-0 z-100 flex h-full w-full max-w-sm flex-col rounded-l-2xl border-l border-muted bg-card outline-none"
        >
          <DrawerHandle
            class="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-muted-foreground/40"
          />
          <div class="flex-1 flex justify-between flex-col items-center p-6">
            <!-- Logo -->
            <div>
              <img src="/icons/logo.svg" alt="logo" width="70" height="70" />
            </div>

            <!-- Navigation items (or links) -->
            <div class="flex flex-col items-center gap-6">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.label"
                :to="link.href"
                class="text-2xl font-medium tracking-wide transition-colors duration-200 hover:text-green-200"
                @click="open = false"
              >
                {{ link.label }}
              </NuxtLink>
            </div>

            <!-- Social links -->
            <div class="flex justify-center gap-4">
              <Icon v-for="link in socialLinks" :key="link.name" size="2rem" :name="link.icon" />
            </div>
          </div>

          <!-- No clue what this is?! -->
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
  animation: mobile-nav-overlay-in 450ms cubic-bezier(0.32, 0.72, 0, 1);
}

.overlay[data-state="closed"] {
  animation: mobile-nav-overlay-out 450ms cubic-bezier(0.32, 0.72, 0, 1);
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
</style>

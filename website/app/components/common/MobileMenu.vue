<script lang="ts" setup>
interface Link {
  label: string;
  href: string;
}

interface NavLink extends Link {
  label: "Home" | "About" | "Blogs" | "Projects";
}

interface MobileMenuProps {
  /** The navigation links to the various sections of the site. */
  navLinks: NavLink[];
}

const props = defineProps<MobileMenuProps>();

const { socialLinks } = useAppConfig();

const emit = defineEmits<{ (e: "closeMenu"): void }>();
const closeMenu = () => emit("closeMenu");
</script>

<template>
  <div class="overlay" @click.self="closeMenu">
    <div class="header">
      <img src="/icons/logo.svg" alt="" width="50" height="50" />
      <Icon
        name="material-symbols:close-small-outline"
        class="bg-slate-200"
        size="2.15rem"
        @click="closeMenu"
      />
    </div>

    <div class="menu">
      <NuxtLink v-for="(link, index) in props.navLinks" :key="index" :to="link.href">
        {{ link.label }}
      </NuxtLink>
    </div>

    <div v-if="socialLinks" class="socials">
      <a v-for="(item, index) in socialLinks" :key="index" :href="item.href" target="_blank">
        <img :src="item.icon" :alt="item.name" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.overlay,
.header,
.menu,
.socials {
  display: flex;
}

.overlay,
.menu {
  flex-direction: column;
}

.overlay,
.header,
.socials {
  justify-content: space-between;
}

a {
  text-decoration: none;
}

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: background 0.4s ease;
  padding: 2rem;
  background-color: #111a21;

  .header {
    width: 100%;
  }

  .menu {
    text-align: center;
    gap: 2rem;
  }
}
</style>

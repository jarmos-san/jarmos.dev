<template>
  <footer>
    <img :src="props.logo" alt="" width="50" height="50" >
    <div>
      <ul>
        <li v-for="(link, index) in props.navLinks" :key="index">
          <CommonNavLink :href="link.href">{{ link.label }}</CommonNavLink>
        </li>
      </ul>
    </div>
    <small>
      <slot />
    </small>
    <small>
      <ul>
        <li v-for="(doc, index) in props.legalDocs" :key="index">
          <CommonNavLink :href="doc.href">{{ doc.label }}</CommonNavLink>
        </li>
      </ul>
    </small>
  </footer>
</template>

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

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  padding: 0 3rem;
  margin-bottom: 2rem;

  small {
    font-size: 0.5rem;
    text-align: center;
  }

  ul {
    display: flex;
    gap: 1rem;
    padding: 0;
    list-style-type: none;
  }
}
</style>

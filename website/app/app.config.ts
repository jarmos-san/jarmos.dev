export default defineAppConfig({
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  socialLinks: [
    {
      name: "Email",
      href: "mailto:contact@jarmos.dev",
      icon: "mdi:gmail",
      label: "contact@jarmos.dev",
    },
    {
      name: "Twitter",
      href: "https://x.com/jarmosan",
      icon: "line-md:twitter-x",
      label: "@Jarmossan",
    },
    {
      name: "GitHub",
      href: "https://github.com/Jarmos-san",
      icon: "line-md:github",
      label: "jarmos-san",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jarmos.san",
      icon: "line-md:instagram",
      label: "jarmos.san",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jarmos",
      icon: "line-md:linkedin",
      label: "jarmos",
    },
    {
      name: "RSS",
      href: "/rss.xml",
      icon: "material-symbols:rss-feed-rounded",
      label: "RSS",
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about-me" },
    { label: "Blogs", href: "/blogs" },
    { label: "Projects", href: "/projects" },
  ],
  projects: [
    {
      name: "jarmos.dev",
      desc:
        "An open-source website built with Nuxt.js which doubles as my " +
        "digital garden. It is part portfolio, part blog and part " +
        '"look-what-I-just-built", it\'s always evolving as I tinker with new ' +
        "ideas.",
      href: "https://github.com/jarmos-san/jarmos.dev",
    },
    {
      name: "Crisp",
      desc:
        "A Go-powered commit message police which makes sure you speak " +
        "the language of Conventional Commits--clear, structured & changelog " +
        "- friendly.",
      href: "https://github.com/weburz/crisp",
    },
    {
      name: "Terox",
      desc:
        "A Go-based project template generator which saves us from " +
        "copy-pasting the same boilerplate. Terox makes spinning up new " +
        "projects fast and consistent.",
      href: "https://github.com/jarmos-san/terox",
      isExperimental: true,
    },
    {
      name: "Rivu",
      desc:
        "Rivu is a modern TypeScript library for generating RSS 2.0 feeds " +
        "programmatically. It enforces strict type safety, validates required " +
        "channel metadata and produces a fully compliant RSS feed as an XML " +
        "document.",
      href: "https://github.com/jarmos-san/rivu",
    },
  ],
  seo: {
    projects: {
      title: "Projects",
      desc:
        "Explore my personal projects in software development, ecommerce " +
        "tools, and experiments at the intersection of technology and economics.",
      img: "/icons/favicon.svg",
    },
  },
  legalLinks: [
    {
      label: "Terms and Conditions",
      href: "/terms-and-conditions",
    },
    {
      label: "Distribution Rights",
      href: "/distribution-rights",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
  ],
});

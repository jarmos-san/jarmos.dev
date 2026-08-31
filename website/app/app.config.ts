export default defineAppConfig({
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  socialLinks: [
    {
      name: "Twitter",
      href: "https://x.com/jarmosan",
      icon: "line-md:twitter-x",
    },
    {
      name: "GitHub",
      href: "https://github.com/Jarmos-san",
      icon: "line-md:github",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jarmos.san",
      icon: "line-md:instagram",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jarmos",
      icon: "line-md:linkedin",
    },
    {
      name: "RSS",
      href: "/rss.xml",
      icon: "material-symbols:rss-feed-rounded",
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about-me" },
    { label: "Blogs", href: "/blogs" },
    { label: "Projects", href: "/projects" },
  ],
});

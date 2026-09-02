<template>
  <section
    class="mx-5 mt-12 mb-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:mx-16 md:mt-16 md:mb-16 md:p-12 lg:mx-28 xl:mx-56"
  >
    <!-- Heading -->
    <h2
      class="text-2xl font-bold bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-3xl"
    >
      What're you working on?
    </h2>

    <!-- Body -->
    <p
      class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
    >
      Let's have a conversation! I'd love to hear about what you're working on
      and find a way to work together.
    </p>

    <!-- CTA button -->
    <NuxtLink
      to="/contact-me"
      class="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#83f9a2] px-5 py-2.5 text-sm font-bold text-[#111a20] no-underline transition-all duration-200 hover:bg-[#82f9a1] hover:shadow-[0_0_1.5rem_rgba(131,249,162,0.3)]"
    >
      <Icon
        name="material-symbols:mark-unread-chat-alt-outline-rounded"
        size="1.25rem"
      />
      <span>Contact Me!</span>
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
const details = {
  header:
    "I'm Jarmos — a Senior Engineer by title, Open-Source hacker by heart.",
};

// TODO: Figure a way out to safely the header description sections.
</script>

<template>
  <header class="px-5 pt-8 md:px-16 lg:px-28 xl:px-56">
    <!-- Glass card -->
    <div
      class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:p-16"
    >
      <!-- Heading: gradient text with glow -->
      <h1
        class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl"
      >
        {{ details.header }}
      </h1>

      <!-- Body copy -->
      <p
        class="mt-6 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        I'm <strong class="font-semibold text-[#ecf8ff]">Somraj Saha</strong>
        (aka Jarmos), currently serving as the
        <strong class="font-semibold text-[#ecf8ff]">
          Chief Technology Officer (CTO)</strong
        >
        at
        <a
          href="https://weburz.com"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          Weburz </a
        >. My day job involves architecting systems, mentoring developers and
        occasionally convincing servers to not misbehave.
      </p>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        Outside of work you'll often find me tinkering with and contributing to
        <strong class="font-semibold text-[#ecf8ff]">
          Open-Source Software</strong
        >
        — because who doesn't like giving back to the very ecosystem that makes
        our job both fun and frustrating? 😅
      </p>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        If you're curious, head over to my
        <NuxtLink
          to="/about-me"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          About Me
        </NuxtLink>
        page to dig deeper into my story or check out my
        <a href="/resume.pdf" target="_blank">resume</a> if you want to learn
        more about my work.
      </p>
    </div>
  </header>
</template>

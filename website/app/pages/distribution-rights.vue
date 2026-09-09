<script lang="ts" setup>
  import { useRuntimeConfig, useSeoMeta } from "#imports";

  const title = "Licensing & Distribution Rights";
  const description =
    "Learn about licensing and distribution rights for " +
    "jarmos.dev. Source code under MIT license, blogs under CC-BY-4.0, free " +
    "to use, modify, and share.";
  const { baseURL } = useRuntimeConfig().public;
  const image = `${baseURL}/icons/favicon.svg`;

  useSeoMeta({
    description,
    ogImage: image,
    ogUrl: `${baseURL}/distribution-rights`,
    title,
    twitterCard: "summary",
    twitterImage: image,
  });
</script>

<template>
  <article class="mt-8 mb-12 px-5 text-[#ecf8ff] md:px-16 lg:px-28 xl:px-56">
    <h1
      class="mb-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-3xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl"
    >
      Licensing & Distribution Rights
    </h1>
    <p class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]">
      The entirety of the project you're viewing and using is made available for
      public use under an open-source license. The contents, the source code of
      the website, the analytics (WIP) are all publicly accessible and available
      for public scrutiny.
    </p>
    <p class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]">
      In other words, you're free to view, use, modify everything and anything
      related to this project for your personal benefits as long as you adhere
      to the terms and conditions of the open-source licenses. Hence this page
      details the brief terms and conditions you'll have to be aware of
      before/while consuming the contents of the project.
    </p>
    <h2
      class="my-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-2xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-3xl lg:text-4xl"
    >
      Usage & Distribution Rights of Source Code
    </h2>
    <p class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]">
      The source code of the website which is accessble on this public
      <a
        href="https://github.com/Jarmos-san/jarmos.dev"
        target="_blank"
        class="text-[#b0fbbc] underline decoration-[#b0fbbc]/30 underline-offset-2 transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
      >
        GitHub repository
      </a>
      is licensed under the MIT license. You can read more about the license in
      its
      <a
        href="https://github.com/Jarmos-san/jarmos.dev/blob/main/LICENSE"
        target="_blank"
        class="text-[#b0fbbc] underline decoration-[#b0fbbc]/30 underline-offset-2 transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
      >
        <code>LICENSE</code>
      </a>
      document.
    </p>
    <p class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]">
      In brief the licensing terms and conditions states;
    </p>
    <ol class="my-4 list-decimal space-y-1 pl-6 text-base font-normal">
      <li>
        You can fork the repository, modify its contents for your personal
        requirements be it commercial or non-commercial.
      </li>
      <li>
        Take inspiration from the source code to build your own personal website
        after customising the source code of the website.
      </li>
      <li>Contribute, report and/or fix bugs you found in the project.</li>
      <li>
        Use the source code for commercial purposes by providing due credits to
        the stakeholders.
      </li>
    </ol>
    <h2
      class="my-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-2xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-3xl lg:text-4xl"
    >
      Usage and Distribution Rights of the Literature
    </h2>
    <p class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]">
      The website contains some write-ups (or "blogs") which I personally
      publish of my own accord. Hence as is with everything I work on, the blogs
      in question are made available in the public domain licensed under the
      <a
        href="https://creativecommons.org/licenses/by/4.0"
        target="_blank"
        class="text-[#b0fbbc] underline decoration-[#b0fbbc]/30 underline-offset-2 transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
      >
        CC-BY-4.0
      </a>
      license as well. And as per the terms and conditions of the said license,
      you're entitled to;
    </p>
    <ol class="my-4 list-decimal space-y-1 pl-6 text-base font-normal">
      <li>To use and read the contents of the blogs free of cost.</li>
      <li>
        Distribute or use the contents as a source of reference for your
        commercial or non-commercial needs.
      </li>
      <li>
        Modify the contents, rephrase or fix the contents based on correct
        interpretations and facts if you find any.
      </li>
    </ol>
  </article>
</template>

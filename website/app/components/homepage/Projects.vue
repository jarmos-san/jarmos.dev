<template>
  <section class="px-5 md:px-16 lg:px-28 xl:px-56 mt-16">
    <span
      class="inline-block text-xs font-semibold tracking-wider uppercase text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-4"
    >
      Portfolio
    </span>
    <h2 class="text-3xl font-bold text-white mb-2">Featured Projects</h2>
    <p class="text-base text-white/60 max-w-2xl mb-8">
      A selection of open-source projects I've built or contributed to — from developer tools
      to content platforms. Each one solved a real problem I or my team ran into.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      <slot />
    </div>
  </section>
</template>

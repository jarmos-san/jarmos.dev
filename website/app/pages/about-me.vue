<script lang="ts" setup>
const title = "About Me";
const description = `Somraj Saha (Jarmos) - CTO at Weburz. Writing about software
engineering, open-source, and the occasional dive into economics and investments.`;
const baseUrl = useRuntimeConfig().public.baseURL;

useSeoMeta({
  title,
  description,
  ogImage: `${baseUrl}/icons/logo.svg`,
  ogUrl: baseUrl,
  twitterImage: `${baseUrl}/icons/logo.svg`,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <article class="px-5 md:px-16 lg:px-28 xl:px-56 mb-12 mt-8">
    <!-- Hero card -->
    <section
      class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md"
    >
      <span
        class="inline-block text-xs font-semibold tracking-wider text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-5"
      >
        ABOUT ME
      </span>

      <h1
        class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
      >
        Hello there! 👋
      </h1>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        My name is
        <strong class="font-semibold text-[#ecf8ff]">Somraj Saha</strong>,
        though many of my friends (and occasionally my family) call me by my pen
        name: Jarmos.
      </p>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        Welcome to my
        <a
          href="https://www.thunknotes.com/blog/what-is-a-digital-garden"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          digital garden </a
        >&mdash; a space where I share my thoughts, learnings, and experiments
        as a Software Engineer. While most of my writing revolves around
        Software Engineering and Computer Science, I occasionally wander into
        other territories like Financial Economics and Investments.
      </p>
      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        And in case you're wondering: no, none of this is AI-generated fluff. I
        do use AI to catch typos and polish grammar (English isn't my first
        language), but the ideas and words are all mine.
      </p>
    </section>

    <!-- My Background -->
    <section
      class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md"
    >
      <h2
        class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
      >
        My Background
      </h2>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        I currently serve as the
        <strong class="font-semibold text-[#ecf8ff]"
          >Chief Technology Officer (CTO)</strong
        >
        at
        <a
          href="https://weburz.com"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          Weburz </a
        >, where I lead our engineering and infrastructure efforts. Together
        with my friend (and boss),
        <a
          href="https://www.sagarkapoor.eu"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          Sagar Kapoor</a
        >, we build tools and services that help small businesses thrive online.
        Beyond our proprietary work, we're also big on Free and Open-Source
        Software (FOSS)-you can explore some of our projects at our
        <a
          href="https://github.com/Weburz"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          GitHub organization</a
        >.
      </p>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        Fun fact: despite holding a
        <strong class="font-semibold text-[#ecf8ff]"
          >Master's degree in Economics</strong
        >
        from the
        <a
          href="https://uohyd.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          University of Hyderabad</a
        >, I eventually traded demand curves for code. While I still enjoy
        reading the occasional economics paper, my true passion lies in Computer
        Science and building software that actually helps people. You'll still
        catch me writing about Economics here once in a while-but don't expect a
        supply-demand diagram in every post.
      </p>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        My fascination with computers started in my teens, though resources back
        then were scarce. University changed that: access to labs, a community
        of peers, and an environment that encouraged self-learning. I'm forever
        grateful for the people who supported my journey from those days to
        where I am now.
      </p>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        Today, I find joy in knowing my work has a real-world impact. If you've
        benefited from something I've built or written, I'd love to hear from
        you! Drop me a message at
        <a
          href="mailto:contact@jarmos.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          contact@jarmos.dev</a
        >
        &mdash; I reply faster than most customer support desks.
      </p>
    </section>

    <!-- My Developer Toolkit -->
    <section
      class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md"
    >
      <h2
        class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
      >
        My Developer Toolkit
      </h2>

      <p
        class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        Over the years, I've worked with a dizzying number of technologies.
        Here's a curated list of the ones I keep closest to my heart (and
        fingertips):
      </p>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6"
      >
        <!-- Programming Languages -->
        <div
          class="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-200 hover:bg-white/10 hover:border-white/15"
        >
          <h3 class="text-lg font-semibold text-white mb-4">
            Programming Languages
          </h3>
          <ol
            class="flex flex-col gap-3 list-none text-sm leading-7 text-white/60 font-medium"
          >
            <li>
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Python</a
              >
              &mdash; my go-to for server-side applications, microservices, and
              automation scripts. It's clean, reliable, and easier on the eyes
              than Bash.
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                TypeScript</a
              >
              &mdash; for building web applications with type safety, especially
              with
              <a
                href="https://vuejs.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Vue.js</a
              >.
            </li>
            <li>
              <a
                href="https://lua.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Lua</a
              >
              &mdash; a niche but powerful language I mainly use to customize
              tools like
              <a
                href="https://neovim.io"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Neovim</a
              >,
              <a
                href="https://wezterm.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                WezTerm</a
              >, and
              <a
                href="https://redis.io"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Redis</a
              >.
            </li>
            <li>
              <a
                href="https://go.dev"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Go</a
              >
              &mdash; my choice for writing performance-sensitive software,
              particularly CLI tools that need to be distributed as binaries.
              (Yes, I'm that person who gets excited about small executables.)
            </li>
          </ol>
        </div>

        <!-- Frameworks & Libraries -->
        <div
          class="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-200 hover:bg-white/10 hover:border-white/15"
        >
          <h3 class="text-lg font-semibold text-white mb-4">
            Frameworks & Libraries
          </h3>
          <p class="text-sm leading-7 text-white/60 font-medium mb-4">
            Here are some frameworks that make my developer life easier (and
            more enjoyable):
          </p>
          <ol
            class="flex flex-col gap-3 list-none text-sm leading-7 text-white/60 font-medium"
          >
            <li>
              <a
                href="https://nuxt.com"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Nuxt.js</a
              >
              &mdash; for building modern, responsive, and SEO-friendly web
              apps.
            </li>
            <li>
              <a
                href="https://fastapi.tiangolo.com"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                FastAPI</a
              >
              &mdash; my go-to for building REST APIs in Python, complete with
              auto-generated docs that feel like cheating (in the best way
              possible).
            </li>
            <li>
              <a
                href="https://ui.nuxt.com"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                NuxtUI</a
              >
              &mdash; a lightweight component library that makes MVP development
              feel like a sprint, not a marathon.
            </li>
          </ol>
          <p class="mt-4 text-sm leading-7 text-white/60 font-medium">
            Honorable mentions:
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
            >
              Next.js</a
            >,
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
            >
              TailwindCSS</a
            >,
            <a
              href="https://flask.palletsprojects.com"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
            >
              Flask</a
            >,
            <a
              href="https://pytorch.org"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
            >
              PyTorch</a
            >,
            <a
              href="https://scikit-learn.org"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
            >
              scikit-learn</a
            >, and more-because the list never truly ends.
          </p>
        </div>

        <!-- Other Tools I Rely On -->
        <div
          class="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-200 hover:bg-white/10 hover:border-white/15"
        >
          <h3 class="text-lg font-semibold text-white mb-4">
            Other Tools I Rely On
          </h3>
          <p class="text-sm leading-7 text-white/60 font-medium mb-4">
            My work doesn't stop at writing code, there's DevOps, infra, and
            general tinkering involved too. Here are some of the tools I keep in
            my toolkit:
          </p>
          <ol
            class="flex flex-col gap-3 list-none text-sm leading-7 text-white/60 font-medium"
          >
            <li>
              <a
                href="https://ubuntu.com"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Ubuntu</a
              >
              /
              <a
                href="https://fedoraproject.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Fedora</a
              >
              for development,
              <a
                href="https://debian.org"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Debian</a
              >
              for deployments. I also use WSL 2 on a Windows laptop (not my
              favorite, but hey; compromise is part of engineering).
            </li>
            <li>
              <a
                href="https://www.docker.com"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Docker</a
              >
              &mdash; because without it, I'd constantly hear
              <a
                href="https://www.donthitsave.com/comic/2016/07/15/it-works-on-my-computer"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
                >"but it works on my machine"</a
              >.
            </li>
            <li>
              <a
                href="https://developer.hashicorp.com/terraform"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Terraform</a
              >,
              <a
                href="https://packer.io"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Packer
              </a>
              &amp;
              <a
                href="https://www.ansible.com"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Ansible</a
              >
              &mdash; for provisioning and managing infrastructure as code,
              because SSH'ing into boxes manually gets old fast.
            </li>
            <li>
              <a
                href="https://neovim.io"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
              >
                Neovim
              </a>
              &mdash; my editor of choice, tailored into a
              <a
                href="https://youtu.be/QMVIJhC9Veg"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
                >personalized development environment</a
              >. My
              <a
                href="https://github.com/Jarmos-san/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
                >dotfiles</a
              >
              are open if you'd like to borrow ideas for your own setup.
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md text-center"
    >
      <h2
        class="text-2xl font-bold bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-3xl"
      >
        Let's work together
      </h2>

      <p
        class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
      >
        If you'd like to work with me, feel free to view my resume or just drop
        me a message at
        <a
          href="mailto:contact@jarmos.dev"
          class="underline decoration-[#b0fbbc]/30 underline-offset-2 text-[#b0fbbc] transition-colors duration-200 hover:text-[#83f9a2] hover:decoration-[#83f9a2]/60"
        >
          contact@jarmos.dev</a
        >.
      </p>

      <div
        class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-[#83f9a2] px-5 py-2.5 text-sm font-bold text-[#111a20] no-underline transition-all duration-200 hover:bg-[#82f9a1] hover:shadow-[0_0_1.5rem_rgba(131,249,162,0.3)]"
        >
          <Icon name="material-symbols:description-outline" size="1.25rem" />
          <span>View Resume</span>
        </a>
        <NuxtLink
          to="/contact-me"
          class="inline-flex items-center gap-2 rounded-lg border border-[#83f9a2]/30 bg-[#83f9a2]/10 px-5 py-2.5 text-sm font-bold text-[#83f9a2] no-underline transition-all duration-200 hover:bg-[#83f9a2]/20 hover:border-[#83f9a2]/50"
        >
          <Icon
            name="material-symbols:mark-unread-chat-alt-outline-rounded"
            size="1.25rem"
          />
          <span>Contact Me</span>
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

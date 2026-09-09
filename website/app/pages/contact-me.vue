<script setup lang="ts">
  import { useNow, useStorage } from "@vueuse/core";
  import {
    Label,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastRoot,
    ToastTitle,
    ToastViewport,
  } from "reka-ui";

  import {
    useRuntimeConfig,
    useSeoMeta,
    ref,
    computed,
    onMounted,
  } from "#imports";

  const title = "Contact Me";
  const description =
    "Get in touch with Somraj Saha (Jarmos) for " +
    "collaborations, open-source work, or just a friendly chat about tech.";
  const baseURL = useRuntimeConfig().public.baseURL;
  const image = `${baseURL}/icons/favicon.svg`;

  useSeoMeta({
    title,
    description,
    ogImage: image,
    ogUrl: `${baseURL}/contact-me`,
    twitterImage: image,
    twitterCard: "summary",
  });

  const name = useStorage("contact-draft-name", "");
  const email = useStorage("contact-draft-email", "");
  const subject = useStorage("contact-draft-subject", "");
  const message = useStorage("contact-draft-message", "");

  const toastOpen = ref(false);
  const toastMessage = ref({ title: "", description: "" });

  const now = useNow();
  const jarmosTimezone = "Asia/Kolkata";

  const viewerTimezone = ref<string | null>(null);
  onMounted(() => {
    viewerTimezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
  });

  const formatTime = (tz: string) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now.value);

  const jarmosTime = computed(() => formatTime(jarmosTimezone));

  const viewerTime = computed(() =>
    viewerTimezone.value ? formatTime(viewerTimezone.value) : null,
  );

  const viewerTimezoneShort = computed(() => {
    if (!viewerTimezone.value) return "";
    return (
      new Intl.DateTimeFormat("en-US", {
        timeZone: viewerTimezone.value,
        timeZoneName: "short",
      })
        .formatToParts(now.value)
        .find((p) => p.type === "timeZoneName")?.value ?? ""
    );
  });

  const contactLinks = [
    {
      label: "Email",
      icon: "material-symbols:mail-outline",
      href: "mailto:contact@jarmos.dev",
      value: "contact@jarmos.dev",
    },
    {
      label: "GitHub",
      icon: "mdi:github",
      href: "https://github.com/jarmos-san",
      value: "@Jarmos-san",
    },
    {
      label: "Twitter / X",
      icon: "mdi:twitter",
      href: "https://x.com/jarmossan",
      value: "@jarmossan",
    },
    {
      label: "LinkedIn",
      icon: "mdi:linkedin",
      href: "https://linkedin.com/in/jarmos",
      value: "Somraj Saha",
    },
  ];

  const handleSubmit = () => {
    if (!name.value || !email.value || !message.value) return;

    const mailSubject = subject.value
      ? `${subject.value} — from ${name.value}`
      : `Message from ${name.value}`;
    const body = [
      `Hi Jarmos,`,
      ``,
      message.value,
      ``,
      `—`,
      `${name.value}`,
      `${email.value}`,
    ].join("\n");

    const mailtoLink = `mailto:contact@jarmos.dev?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
    globalThis.location.href = mailtoLink;

    toastMessage.value = {
      title: "Opening email client",
      description: "Your default mail app should open shortly.",
    };
    toastOpen.value = true;

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  };
</script>

<template>
  <ToastProvider>
    <article class="mt-8 mb-12 px-5 md:px-16 lg:px-28 xl:px-56">
      <!-- Hero -->
      <section
        class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:p-14"
      >
        <span
          class="mb-5 inline-block rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-green-400"
        >
          CONTACT
        </span>

        <h1
          class="mb-4 bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-3xl leading-tight font-bold text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl"
        >
          Get in touch
        </h1>

        <p
          class="mt-4 max-w-3xl text-base leading-relaxed text-[#ecf8ff]/90 md:text-lg"
        >
          Have a question, proposal, or want to collaborate on something? I'm
          always happy to hear from fellow developers, potential collaborators,
          or anyone curious about technology.
        </p>
      </section>

      <!-- Two-column layout -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Form -->
        <section
          class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:col-span-2"
        >
          <h2 class="mb-6 text-xl font-semibold text-white">Send a message</h2>

          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-2">
              <Label
                for="contact-name"
                class="text-sm font-medium text-[#ecf8ff]/80"
              >
                Full name
              </Label>
              <input
                id="contact-name"
                v-model="name"
                type="text"
                required
                placeholder="Your name"
                class="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#ecf8ff] transition-all duration-200 outline-none placeholder:text-white/30 focus:border-[#83f9a2] focus:ring-2 focus:ring-[#83f9a2]/50"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Label
                for="contact-email"
                class="text-sm font-medium text-[#ecf8ff]/80"
              >
                Email address
              </Label>
              <input
                id="contact-email"
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#ecf8ff] transition-all duration-200 outline-none placeholder:text-white/30 focus:border-[#83f9a2] focus:ring-2 focus:ring-[#83f9a2]/50"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Label
                for="contact-subject"
                class="text-sm font-medium text-[#ecf8ff]/80"
              >
                Subject
              </Label>
              <input
                id="contact-subject"
                v-model="subject"
                type="text"
                placeholder="What's this about?"
                class="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#ecf8ff] transition-all duration-200 outline-none placeholder:text-white/30 focus:border-[#83f9a2] focus:ring-2 focus:ring-[#83f9a2]/50"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Label
                for="contact-message"
                class="text-sm font-medium text-[#ecf8ff]/80"
              >
                Your message
              </Label>
              <textarea
                id="contact-message"
                v-model="message"
                rows="6"
                required
                placeholder="Tell me about your project, question, or just say hello..."
                class="resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#ecf8ff] transition-all duration-200 outline-none placeholder:text-white/30 focus:border-[#83f9a2] focus:ring-2 focus:ring-[#83f9a2]/50"
              />
            </div>

            <button
              type="submit"
              class="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#83f9a2] px-6 py-3 text-sm font-bold text-[#111a20] transition-all duration-200 hover:bg-[#b0fbbc] hover:shadow-[0_0_1.5rem_rgba(131,249,162,0.3)]"
            >
              <Icon name="material-symbols:send-outline" size="1.25rem" />
              <span>Send message</span>
            </button>
          </form>
        </section>

        <!-- Sidebar -->
        <section
          class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          <h2 class="mb-6 text-xl font-semibold text-white">
            Ways to reach me
          </h2>

          <ul class="flex list-none flex-col gap-3 p-0">
            <li v-for="link in contactLinks" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 no-underline transition-all duration-200 hover:border-white/15 hover:bg-white/10"
              >
                <Icon
                  :name="link.icon"
                  size="1.5rem"
                  class="shrink-0 text-[#83f9a2]"
                />
                <div class="flex min-w-0 flex-col">
                  <span
                    class="text-[10px] font-semibold tracking-wider text-white/40 uppercase"
                  >
                    {{ link.label }}
                  </span>
                  <span class="truncate text-sm text-[#ecf8ff]">
                    {{ link.value }}
                  </span>
                </div>
              </a>
            </li>
          </ul>

          <div class="mt-8 border-t border-white/10 pt-6">
            <p class="mb-3 text-xs tracking-wider text-white/40 uppercase">
              Current time
            </p>

            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-3">
                <Icon
                  name="material-symbols:schedule-outline"
                  size="1rem"
                  class="shrink-0 text-[#83f9a2]"
                />
                <div class="flex flex-col">
                  <span
                    class="text-[10px] font-semibold tracking-wider text-white/40 uppercase"
                  >
                    Jarmos &middot; IST
                  </span>
                  <span class="font-mono text-sm text-[#ecf8ff] tabular-nums">
                    {{ jarmosTime }}
                  </span>
                </div>
              </div>

              <div v-if="viewerTime" class="flex items-center gap-3">
                <Icon
                  name="material-symbols:language-outline"
                  size="1rem"
                  class="shrink-0 text-[#83f9a2]"
                />
                <div class="flex flex-col">
                  <span
                    class="text-[10px] font-semibold tracking-wider text-white/40 uppercase"
                  >
                    You &middot; {{ viewerTimezoneShort }}
                  </span>
                  <span class="font-mono text-sm text-[#ecf8ff] tabular-nums">
                    {{ viewerTime }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-6 rounded-lg border border-[#83f9a2]/20 bg-[#83f9a2]/10 p-4"
          >
            <p class="text-sm text-[#83f9a2]">
              <Icon
                name="material-symbols:auto-schedule-outline"
                size="1rem"
                class="mr-1.5 inline align-[-0.15em]"
              />
              I typically reply within 24-48 hours
            </p>
          </div>
        </section>
      </div>
    </article>

    <!-- Toast -->
    <ToastRoot
      v-model:open="toastOpen"
      :duration="4000"
      class="rounded-xl border border-[#83f9a2]/30 bg-[#162028] p-4 shadow-lg data-[state=closed]:animate-[fadeOut_200ms_ease] data-[state=open]:animate-[slideIn_300ms_ease]"
    >
      <ToastTitle
        class="flex items-center gap-2 text-sm font-semibold text-[#83f9a2]"
      >
        <Icon name="material-symbols:check-circle-outline" size="1.15rem" />
        {{ toastMessage.title }}
      </ToastTitle>
      <ToastDescription class="mt-1 text-xs text-[#ecf8ff]/70">
        {{ toastMessage.description }}
      </ToastDescription>
      <ToastClose
        aria-label="Close"
        class="absolute top-3 right-3 cursor-pointer text-white/40 transition-colors duration-200 hover:text-white"
      >
        <Icon name="material-symbols:close" size="1rem" />
      </ToastClose>
    </ToastRoot>

    <ToastViewport
      class="fixed right-4 bottom-4 z-50 flex w-full max-w-sm flex-col gap-2"
    />
  </ToastProvider>
</template>

<style>
  @keyframes slideIn {
    from {
      transform: translateX(calc(100% + 1rem));
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [data-state="open"],
    [data-state="closed"] {
      animation: none !important;
      transition: none !important;
    }
  }
</style>

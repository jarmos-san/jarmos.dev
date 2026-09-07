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

const title = "Contact Me";
const description =
  "Get in touch with Somraj Saha (Jarmos) for collaborations, open-source work, or just a friendly chat about tech.";
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
  window.location.href = mailtoLink;

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
    <article class="px-5 md:px-16 lg:px-28 xl:px-56 mb-12 mt-8">
      <!-- Hero -->
      <section
        class="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-14 mb-6 backdrop-blur-md"
      >
        <span
          class="inline-block text-xs font-semibold tracking-wider text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-5"
        >
          CONTACT
        </span>

        <h1
          class="text-3xl font-bold leading-tight bg-linear-to-r from-[#b0fbbc] to-[#82f9a1] bg-clip-text text-transparent [text-shadow:0_0_1rem_rgba(131,249,162,0.3)] md:text-4xl lg:text-5xl mb-4"
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Form -->
        <section
          class="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md"
        >
          <h2 class="text-xl font-semibold text-white mb-6">Send a message</h2>

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
                class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#ecf8ff] placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#83f9a2]/50 focus:border-[#83f9a2] transition-all duration-200"
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
                class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#ecf8ff] placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#83f9a2]/50 focus:border-[#83f9a2] transition-all duration-200"
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
                class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#ecf8ff] placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#83f9a2]/50 focus:border-[#83f9a2] transition-all duration-200"
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
                class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#ecf8ff] placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#83f9a2]/50 focus:border-[#83f9a2] transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              class="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#83f9a2] px-6 py-3 text-sm font-bold text-[#111a20] transition-all duration-200 hover:bg-[#b0fbbc] hover:shadow-[0_0_1.5rem_rgba(131,249,162,0.3)] cursor-pointer"
            >
              <Icon name="material-symbols:send-outline" size="1.25rem" />
              <span>Send message</span>
            </button>
          </form>
        </section>

        <!-- Sidebar -->
        <section
          class="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
        >
          <h2 class="text-xl font-semibold text-white mb-6">
            Ways to reach me
          </h2>

          <ul class="flex flex-col gap-3 list-none p-0">
            <li v-for="link in contactLinks" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-200 hover:bg-white/10 hover:border-white/15 group no-underline"
              >
                <Icon
                  :name="link.icon"
                  size="1.5rem"
                  class="text-[#83f9a2] shrink-0"
                />
                <div class="flex flex-col min-w-0">
                  <span
                    class="text-[10px] font-semibold tracking-wider uppercase text-white/40"
                  >
                    {{ link.label }}
                  </span>
                  <span class="text-sm text-[#ecf8ff] truncate">
                    {{ link.value }}
                  </span>
                </div>
              </a>
            </li>
          </ul>

          <div class="mt-8 pt-6 border-t border-white/10">
            <p class="text-xs uppercase tracking-wider text-white/40 mb-3">
              Current time
            </p>

            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-3">
                <Icon
                  name="material-symbols:schedule-outline"
                  size="1rem"
                  class="text-[#83f9a2] shrink-0"
                />
                <div class="flex flex-col">
                  <span
                    class="text-[10px] font-semibold tracking-wider uppercase text-white/40"
                  >
                    Jarmos &middot; IST
                  </span>
                  <span class="text-sm font-mono text-[#ecf8ff] tabular-nums">
                    {{ jarmosTime }}
                  </span>
                </div>
              </div>

              <div v-if="viewerTime" class="flex items-center gap-3">
                <Icon
                  name="material-symbols:language-outline"
                  size="1rem"
                  class="text-[#83f9a2] shrink-0"
                />
                <div class="flex flex-col">
                  <span
                    class="text-[10px] font-semibold tracking-wider uppercase text-white/40"
                  >
                    You &middot; {{ viewerTimezoneShort }}
                  </span>
                  <span class="text-sm font-mono text-[#ecf8ff] tabular-nums">
                    {{ viewerTime }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-6 p-4 bg-[#83f9a2]/10 border border-[#83f9a2]/20 rounded-lg"
          >
            <p class="text-sm text-[#83f9a2]">
              <Icon
                name="material-symbols:auto-schedule-outline"
                size="1rem"
                class="inline align-[-0.15em] mr-1.5"
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
      class="bg-[#162028] border border-[#83f9a2]/30 rounded-xl p-4 shadow-lg data-[state=open]:animate-[slideIn_300ms_ease] data-[state=closed]:animate-[fadeOut_200ms_ease]"
    >
      <ToastTitle
        class="text-[#83f9a2] font-semibold text-sm flex items-center gap-2"
      >
        <Icon name="material-symbols:check-circle-outline" size="1.15rem" />
        {{ toastMessage.title }}
      </ToastTitle>
      <ToastDescription class="text-[#ecf8ff]/70 text-xs mt-1">
        {{ toastMessage.description }}
      </ToastDescription>
      <ToastClose
        aria-label="Close"
        class="absolute top-3 right-3 text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <Icon name="material-symbols:close" size="1rem" />
      </ToastClose>
    </ToastRoot>

    <ToastViewport
      class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm"
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

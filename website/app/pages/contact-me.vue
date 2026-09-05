<template>
  <article>
    <h1>Contact Me</h1>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input id="name" v-model="name" type="text" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" v-model="message" rows="5" required />
      </div>
      <button type="submit">Send</button>
    </form>
  </article>
</template>

<script setup lang="ts">
const title = "Contact Me";
const description = "";
const baseURL = useRuntimeConfig().public.baseURL;
const image = `${baseURL}/icons/favicon.svg`;

useSeoMeta({
  title,
  description,
  ogImage: image,
  ogUrl: baseURL,
  twitterImage: image,
  twitterCard: "summary",
});

const name = ref("");
const email = ref("");
const message = ref("");

const handleSubmit = () => {
  const subject = encodeURIComponent(`Message from ${name.value}`);
  const body = encodeURIComponent(
    "Hello Jarmos, I'm reaching out to you with a proposal",
  );

  const mailtoLink = `mailto:contact@jarmos.dev?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
};
</script>

<style lang="scss" scoped>
article {
  padding: 0 2rem;
  margin: 2rem auto;

  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 7rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 14rem;
  }
}

.contact-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

input,
textarea {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.3px;
  font: inherit;
  color: black;
}

button {
  padding: 0.6rem 1.2rem;
  border-radius: 0.3rem;
  background: #83f9a2;
  color: #111a20;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #b0fbbc;
  }
}
</style>

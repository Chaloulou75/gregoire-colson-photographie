<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio — Grégoire Colson',
  description: 'Découvrez le travail de Grégoire Colson : reportage, street photo, portrait.',
})

const LR = 'https://lightroom.adobe.com/v2c/spaces'

const sections = [
  {
    label: 'Reportage',
    to: '/reportage',
    image: `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/4ba2ff81c76f41f78f7381ca3f5e6fa3/revisions/8fce39f4abd14c72b6a2d7f34aa62790/renditions/7ddc300be942b16b3abce3006c1c2e8e`,
  },
  {
    label: 'Street Photo',
    to: '/street-photo',
    image: `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/c7d7deca0cdb45d7b95c00bf78821a9a/revisions/0158853d8e0547a4a0957e4323f30619/renditions/5b76648f0d2860b7ed61b373cef57f0c`,
  },
  {
    label: 'Portrait',
    to: '/portrait',
    image: null,
  },
  {
    label: 'Bio',
    to: '/bio',
    image: `${LR}/077562f98b2e421dadb5f513289df753/assets/abe8208fcf60462c8c207bfce98c0fd0/revisions/fa7d75461eda88660bd11b0b94f4782a/renditions/7731fea1a730dc977eb94972a2b22265`,
  },
]
</script>

<template>
  <div class="grid h-[calc(100vh-73px)] grid-cols-2 grid-rows-2">
    <NuxtLink
      v-for="section in sections"
      :key="section.to"
      :to="section.to"
      class="group relative flex items-end overflow-hidden p-8"
    >
      <!-- Background image -->
      <img
        v-if="section.image"
        :src="section.image"
        :alt="section.label"
        class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div v-else class="absolute inset-0 bg-stone-900" />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-stone-950/50 transition-opacity duration-300 group-hover:bg-stone-950/30" />

      <!-- Label -->
      <span class="relative z-10 font-serif text-3xl font-bold tracking-wide text-stone-100 md:text-4xl">
        {{ section.label }}
      </span>

      <!-- Arrow -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="relative z-10 ml-3 mb-1 size-5 translate-x-0 text-stone-100 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </NuxtLink>
  </div>
</template>

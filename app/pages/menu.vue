<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio — Grégoire Colson',
  description: 'Découvrez le travail de Grégoire Colson : reportage, street photo, portrait.',
})

const LR = 'https://lightroom.adobe.com/v2c/spaces'

const sections = [
  {
    label: 'Portrait',
    to: '/portrait',
    image: null,
  },
  {
    label: 'Reportage',
    to: '/reportage',
    image: `${LR}/09a2dca3b67b4c2391b9d50c390ac453/assets/4ba2ff81c76f41f78f7381ca3f5e6fa3/revisions/8fce39f4abd14c72b6a2d7f34aa62790/renditions/7ddc300be942b16b3abce3006c1c2e8e`,
  },
  {
    label: 'Street Photo',
    to: '/street-photo',
    image: `${LR}/d515c3e5fa91430685ad84117ed22f81/assets/83cdc975dc234ed0adf02e1892aa25c9/revisions/85ff8dd72c964112a92dae7a39b333f9/renditions/a8f6e9aceec409e18a3f45c30f1b22f1`,
  },
  {
    label: 'Bio',
    to: '/bio',
    image: `${LR}/077562f98b2e421dadb5f513289df753/assets/abe8208fcf60462c8c207bfce98c0fd0/revisions/fa7d75461eda88660bd11b0b94f4782a/renditions/7731fea1a730dc977eb94972a2b22265`,
  },
]
</script>

<template>
  <div class="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-12 sm:px-8">
    <div class="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
      <NuxtLink
        v-for="section in sections"
        :key="section.to"
        :to="section.to"
        class="group relative flex h-48 items-end overflow-hidden rounded-lg p-5 sm:h-56 md:h-64"
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
        <span class="relative z-10 font-serif text-xl font-bold tracking-wide text-stone-100 sm:text-2xl md:text-3xl">
          {{ section.label }}
        </span>

        <!-- Arrow -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="relative z-10 ml-2 mb-0.5 size-4 translate-x-0 text-stone-100 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:size-5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

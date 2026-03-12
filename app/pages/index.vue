<script setup lang="ts">
useSeoMeta({
  title: 'Grégoire Colson — Photographe',
  description: 'Reportage, street photo et portrait par Grégoire Colson, photographe formé aux Gobelins.',
})

const { fetchProjects } = useProjects()
const { data: allProjects } = await useAsyncData('all-projects', () => fetchProjects())
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative flex h-screen items-center justify-center overflow-hidden">
      <img
        src="https://lightroom.adobe.com/v2c/spaces/077562f98b2e421dadb5f513289df753/assets/abe8208fcf60462c8c207bfce98c0fd0/revisions/fa7d75461eda88660bd11b0b94f4782a/renditions/7731fea1a730dc977eb94972a2b22265"
        alt="Grégoire Colson — Photographe" class="absolute inset-0 h-full w-full object-cover object-top-left" />
      <div class="absolute inset-0 bg-stone-950/50" />
      <div class="relative z-10 text-center">
        <h1 class="text-5xl font-bold tracking-wide text-stone-100 md:text-7xl lg:text-8xl">
          Grégoire Colson
        </h1>
        <p class="mt-4 text-lg tracking-[0.3em] text-stone-200 uppercase">
          Photographe
        </p>
        <NuxtLink to="/menu"
          class="mt-10 inline-block border border-yellow-500/80 px-8 py-3 text-sm tracking-widest text-yellow-500 uppercase transition-all hover:border-yellow-500 hover:bg-yellow-500/10">
          Entrer
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

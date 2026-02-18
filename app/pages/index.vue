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
    <section class="relative flex h-[85vh] items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-stone-900" />
      <div class="relative z-10 text-center">
        <h1 class="text-5xl font-bold tracking-wide text-stone-100 md:text-7xl lg:text-8xl">
          Grégoire Colson
        </h1>
        <p class="mt-4 text-lg tracking-[0.3em] text-stone-400 uppercase">
          Photographe
        </p>
        <NuxtLink
          to="/reportage"
          class="mt-10 inline-block border border-accent/50 px-8 py-3 text-sm tracking-widest text-accent uppercase transition-all hover:border-accent hover:bg-accent/10"
        >
          Découvrir
        </NuxtLink>
      </div>
    </section>

    <!-- All projects -->
    <section class="mx-auto max-w-7xl px-6 py-24">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UiAnimatedSection
          v-for="project in allProjects"
          :key="project.id"
        >
          <PortfolioCard :project="project" />
        </UiAnimatedSection>
      </div>
    </section>
  </div>
</template>

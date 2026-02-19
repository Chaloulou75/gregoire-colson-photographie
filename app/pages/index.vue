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
        src="https://lightroom.adobe.com/v2c/spaces/077562f98b2e421dadb5f513289df753/assets/ed63ebfd637f444db2354d5377d01a27/revisions/30b097d77857445a8b1f2d470e49bdff/renditions/eab1df587d110c756586eb94f064e821"
        alt="Grégoire Colson — Photographe" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 bg-stone-950/50" />
      <div class="relative z-10 text-center">
        <h1 class="text-5xl font-bold tracking-wide text-stone-100 md:text-7xl lg:text-8xl">
          Grégoire Colson
        </h1>
        <p class="mt-4 text-lg tracking-[0.3em] text-stone-200 uppercase">
          Photographe
        </p>
        <NuxtLink to="/reportage"
          class="mt-10 inline-block border border-yellow-500/80 px-8 py-3 text-sm tracking-widest text-yellow-500 uppercase transition-all hover:border-yellow-500 hover:bg-yellow-500/10">
          Découvrir
        </NuxtLink>
      </div>
    </section>

    <!-- All projects -->
    <section v-if="allProjects?.length" class="mx-auto max-w-7xl px-6 py-24">
      <!-- First project — full width -->
      <UiAnimatedSection>
        <PortfolioCard :project="allProjects[0]" />
      </UiAnimatedSection>

      <!-- Remaining projects — side by side -->
      <div class="mt-8 grid gap-8 sm:grid-cols-2">
        <UiAnimatedSection v-for="project in allProjects.slice(1)" :key="project.id">
          <PortfolioCard :project="project" />
        </UiAnimatedSection>
      </div>
    </section>
  </div>
</template>

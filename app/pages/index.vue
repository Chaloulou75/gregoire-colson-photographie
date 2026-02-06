<script setup lang="ts">
useSeoMeta({
  title: 'Grégoire Colson — Photographe',
  description: 'Portfolio de Grégoire Colson, photographe professionnel. Portrait, paysage, architecture, reportage et mariage.',
})

const { fetchFeaturedProjects } = useProjects()
const { data: featuredProjects } = await useAsyncData('featured-projects', fetchFeaturedProjects)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative flex h-[85vh] items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-stone-900" />
      <div class="relative z-10 text-center">
        <h1 class="font-serif text-5xl font-light tracking-wide text-stone-100 md:text-7xl lg:text-8xl">
          Grégoire Colson
        </h1>
        <p class="mt-4 text-lg tracking-[0.3em] text-stone-400 uppercase">
          Photographe
        </p>
        <NuxtLink
          to="/portfolio"
          class="mt-10 inline-block border border-accent/50 px-8 py-3 text-sm tracking-widest text-accent uppercase transition-all hover:border-accent hover:bg-accent/10"
        >
          Découvrir
        </NuxtLink>
      </div>
    </section>

    <!-- Featured projects -->
    <section class="mx-auto max-w-7xl px-6 py-24">
      <UiAnimatedSection>
        <UiSectionTitle>Projets en vedette</UiSectionTitle>
      </UiAnimatedSection>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UiAnimatedSection
          v-for="project in featuredProjects"
          :key="project.id"
        >
          <PortfolioCard :project="project" />
        </UiAnimatedSection>
      </div>

      <UiAnimatedSection class="mt-16 text-center">
        <NuxtLink
          to="/portfolio"
          class="inline-block border border-stone-700 px-8 py-3 text-sm tracking-widest text-stone-400 uppercase transition-all hover:border-accent hover:text-accent"
        >
          Voir tout le portfolio
        </NuxtLink>
      </UiAnimatedSection>
    </section>
  </div>
</template>

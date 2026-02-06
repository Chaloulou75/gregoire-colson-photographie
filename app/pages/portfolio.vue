<script setup lang="ts">
import { categories } from '~/data/projects'

useSeoMeta({
  title: 'Portfolio — Grégoire Colson',
  description: 'Découvrez les projets photographiques de Grégoire Colson : portraits, paysages, architecture, reportages et mariages.',
})

const activeCategory = ref('Tout')
const { fetchProjects } = useProjects()

const { data: allProjects } = await useAsyncData('projects', () => fetchProjects())

const filteredProjects = computed(() => {
  if (!allProjects.value) return []
  if (activeCategory.value === 'Tout') return allProjects.value
  return allProjects.value.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-24">
    <UiSectionTitle tag="h1">Portfolio</UiSectionTitle>

    <PortfolioCategoryFilter
      :categories="categories"
      :active="activeCategory"
      class="mb-12"
      @select="activeCategory = $event"
    />

    <PortfolioMasonryGrid :projects="filteredProjects" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Reportage — Grégoire Colson',
  description: 'Reportages photographiques par Grégoire Colson. Piano, 30&40.',
})

const { fetchProjects } = useProjects()
const { data: reportageProjects } = await useAsyncData('reportage-projects', () => fetchProjects('Reportage'))
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-24">
    <UiSectionTitle tag="h1">Reportage</UiSectionTitle>

    <div class="grid gap-8 sm:grid-cols-2">
      <UiAnimatedSection
        v-for="project in reportageProjects"
        :key="project.id"
      >
        <PortfolioCard :project="project" />
      </UiAnimatedSection>
    </div>
  </div>
</template>

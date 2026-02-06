<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="columns-1 gap-6 sm:columns-2 lg:columns-3">
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      class="mb-6 break-inside-avoid fade-up is-visible"
      :style="{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 100}ms` }"
    >
      <PortfolioCard :project="project" />
    </div>
  </div>
</template>

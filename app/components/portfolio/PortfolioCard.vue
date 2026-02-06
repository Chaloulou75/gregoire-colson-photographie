<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink :to="`/portfolio/${project.slug}`" class="group relative block overflow-hidden rounded-lg">
    <NuxtImg :src="project.coverImage" :alt="project.title" sizes="100vw sm:50vw lg:33vw" loading="lazy"
      class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div
      class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-stone-950/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span class="text-xs tracking-widest text-accent uppercase">{{ project.category }}</span>
      <h3 class="mt-1 font-serif text-xl text-stone-100">{{ project.title }}</h3>
    </div>
  </NuxtLink>
</template>

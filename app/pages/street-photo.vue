<script setup lang="ts">
useSeoMeta({
  title: 'Street Photo — Grégoire Colson',
  description: 'Photographie de rue par Grégoire Colson. Scènes urbaines et instants volés.',
})

const { fetchProjectBySlug } = useProjects()
const { data: project } = await useAsyncData('street-project', () => fetchProjectBySlug('2025-street'))

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-24">
    <UiSectionTitle tag="h1">Street Photo</UiSectionTitle>

    <div v-if="project" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="(img, index) in project.images"
        :key="index"
        class="group overflow-hidden rounded-lg"
        @click="openLightbox(index)"
      >
        <img
          :src="img"
          :alt="`Street Photo — Photo ${index + 1}`"
          loading="lazy"
          class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
    </div>

    <PortfolioLightboxModal
      v-if="lightboxOpen && project"
      :images="project.images"
      :start-index="lightboxIndex"
      @close="lightboxOpen = false"
    />
  </div>
</template>

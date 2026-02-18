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

    <div v-if="project" class="columns-1 gap-4 sm:columns-2 lg:columns-3">
      <button
        v-for="(img, index) in project.images"
        :key="index"
        class="group mb-4 block w-full overflow-hidden rounded-lg break-inside-avoid"
        @click="openLightbox(index)"
      >
        <img
          :src="img"
          :alt="`Street Photo — Photo ${index + 1}`"
          loading="lazy"
          class="w-full transition-transform duration-500 group-hover:scale-105"
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

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { fetchProjectBySlug } = useProjects()
const { data: project } = await useAsyncData(`project-${slug}`, () => fetchProjectBySlug(slug))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet non trouvé' })
}

useSeoMeta({
  title: () => project.value ? `${project.value.title} — Grégoire Colson` : '',
  description: () => project.value?.description ?? '',
  ogImage: () => project.value?.coverImage ?? '',
})

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}
</script>

<template>
  <div v-if="project" class="mx-auto max-w-7xl px-6 py-24">
    <!-- Back link -->
    <NuxtLink
      to="/portfolio"
      class="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-accent"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      Retour au portfolio
    </NuxtLink>

    <!-- Header -->
    <header class="mb-16">
      <span class="text-sm tracking-widest text-accent uppercase">{{ project.category }}</span>
      <h1 class="mt-2 font-serif text-4xl font-light text-stone-100 md:text-5xl">
        {{ project.title }}
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-stone-400">
        {{ project.description }}
      </p>
      <time class="mt-2 block text-sm text-stone-600">
        {{ new Date(project.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' }) }}
      </time>
    </header>

    <!-- Gallery -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="(img, index) in project.images"
        :key="index"
        class="group overflow-hidden rounded-lg"
        @click="openLightbox(index)"
      >
        <NuxtImg
          :src="img"
          :alt="`${project.title} — Photo ${index + 1}`"
          sizes="100vw sm:50vw lg:33vw"
          loading="lazy"
          class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
    </div>

    <!-- Lightbox -->
    <PortfolioLightboxModal
      v-if="lightboxOpen"
      :images="project.images"
      :start-index="lightboxIndex"
      @close="lightboxOpen = false"
    />
  </div>
</template>

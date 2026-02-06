<script setup lang="ts">
useSeoMeta({
  title: 'À propos — Grégoire Colson',
  description: 'Découvrez le parcours et les spécialités de Grégoire Colson, photographe professionnel.',
})

const skills = [
  'Portrait',
  'Paysage',
  'Architecture',
  'Reportage',
  'Mariage',
  'Photographie événementielle',
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-24">
    <UiSectionTitle tag="h1">À propos</UiSectionTitle>

    <div class="grid gap-16 lg:grid-cols-2">
      <!-- Portrait -->
      <UiAnimatedSection>
        <div class="aspect-[3/4] overflow-hidden rounded-lg bg-stone-900">
          <div class="flex h-full items-center justify-center text-stone-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>
      </UiAnimatedSection>

      <!-- Bio -->
      <UiAnimatedSection>
        <h2 class="font-serif text-2xl text-stone-100">Grégoire Colson</h2>
        <div class="mt-6 space-y-4 text-stone-400 leading-relaxed">
          <p>
            Photographe professionnel basé en France, je capture des moments et des atmosphères
            à travers un regard sensible et attentif à la lumière.
          </p>
          <p>
            Mon approche mêle esthétique naturelle et composition soignée, que ce soit pour
            des portraits intimistes, des paysages grandioses ou des reportages événementiels.
          </p>
          <p>
            Chaque projet est une collaboration, une histoire à raconter ensemble.
          </p>
        </div>

        <div class="mt-10">
          <h3 class="mb-4 text-sm tracking-widest text-stone-500 uppercase">Spécialités</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skills"
              :key="skill"
              class="rounded-full border border-stone-700 px-4 py-1.5 text-sm text-stone-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </UiAnimatedSection>
    </div>
  </div>
</template>

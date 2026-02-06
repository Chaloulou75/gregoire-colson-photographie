<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Grégoire Colson',
  description: 'Contactez Grégoire Colson pour vos projets photographiques. Portrait, mariage, reportage et plus.',
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-24">
    <div class="grid gap-16 lg:grid-cols-2">
      <!-- Info -->
      <UiAnimatedSection>
        <UiSectionTitle tag="h1">Contact</UiSectionTitle>
        <p class="text-lg text-stone-400 leading-relaxed">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour
          discuter de vos besoins. Je serai ravi d'échanger avec vous.
        </p>

        <div class="mt-10 space-y-6">
          <div class="flex items-center gap-4">
            <div class="flex size-10 items-center justify-center rounded-full border border-stone-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <span class="text-stone-400">contact@gregoirecolson.com</span>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex size-10 items-center justify-center rounded-full border border-stone-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <span class="text-stone-400">France</span>
          </div>
        </div>
      </UiAnimatedSection>

      <!-- Form -->
      <UiAnimatedSection>
        <ContactForm />
      </UiAnimatedSection>
    </div>
  </div>
</template>

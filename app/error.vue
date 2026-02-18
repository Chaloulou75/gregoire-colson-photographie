<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
  }
}>()
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-6 text-center font-sans">
    <h1 class="text-8xl font-bold text-stone-700">
      {{ error.statusCode }}
    </h1>
    <p class="mt-4 text-lg text-stone-400">
      {{ error.statusMessage || 'Page non trouvée' }}
    </p>
    <NuxtLink
      to="/"
      class="mt-8 inline-block border border-accent/50 px-8 py-3 text-sm tracking-widest text-accent uppercase transition-all hover:border-accent hover:bg-accent/10"
    >
      Retour à l'accueil
    </NuxtLink>
  </div>
</template>

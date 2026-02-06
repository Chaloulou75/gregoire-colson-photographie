<script setup lang="ts">
defineProps<{
  tag?: string
}>()
</script>

<template>
  <div class="mb-12">
    <component :is="tag || 'h2'" class="font-serif text-3xl font-light text-stone-100 md:text-4xl">
      <slot />
    </component>
    <div class="mt-4 h-px w-16 bg-accent" />
  </div>
</template>

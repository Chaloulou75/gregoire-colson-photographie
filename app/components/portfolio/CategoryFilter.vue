<script setup lang="ts">
defineProps<{
  categories: readonly string[]
  active: string
}>()

const emit = defineEmits<{
  select: [category: string]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="cat in categories"
      :key="cat"
      class="rounded-full border px-5 py-2 text-sm tracking-wider uppercase transition-all"
      :class="active === cat
        ? 'border-accent bg-accent/10 text-accent'
        : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300'"
      @click="emit('select', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSwipe } from '@vueuse/core'

const props = defineProps<{
  images: string[]
  startIndex?: number
}>()

const emit = defineEmits<{
  close: []
}>()

const currentIndex = ref(props.startIndex ?? 0)
const lightboxEl = ref<HTMLElement | null>(null)

const hasPrev = computed(() => currentIndex.value > 0)
const hasNext = computed(() => currentIndex.value < props.images.length - 1)

function prev() {
  if (hasPrev.value) currentIndex.value--
}

function next() {
  if (hasNext.value) currentIndex.value++
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

useSwipe(lightboxEl, {
  onSwipeEnd(_e, direction) {
    if (direction === 'left') next()
    if (direction === 'right') prev()
  },
})
</script>

<template>
  <Teleport to="body">
    <div
      ref="lightboxEl"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photo"
      @click.self="emit('close')"
    >
      <!-- Close button -->
      <button
        class="absolute right-4 top-4 z-10 rounded-full p-2 text-stone-400 transition-colors hover:text-stone-100"
        aria-label="Fermer"
        @click="emit('close')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Prev -->
      <button
        v-if="hasPrev"
        class="absolute left-4 z-10 rounded-full p-2 text-stone-400 transition-colors hover:text-stone-100"
        aria-label="Photo précédente"
        @click="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <!-- Image -->
      <img
        :src="images[currentIndex]"
        :alt="`Photo ${currentIndex + 1} sur ${images.length}`"
        class="max-h-[85vh] max-w-[90vw] object-contain"
      >

      <!-- Next -->
      <button
        v-if="hasNext"
        class="absolute right-4 z-10 rounded-full p-2 text-stone-400 transition-colors hover:text-stone-100"
        aria-label="Photo suivante"
        @click="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <!-- Counter -->
      <div class="absolute bottom-4 text-sm text-stone-500">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </Teleport>
</template>

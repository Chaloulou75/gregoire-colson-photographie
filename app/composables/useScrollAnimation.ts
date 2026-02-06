export function useScrollAnimation(options: IntersectionObserverInit = {}) {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (!target.value) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.1, ...options },
    )

    observer.observe(target.value)

    onUnmounted(() => observer.disconnect())
  })

  return { target, isVisible }
}

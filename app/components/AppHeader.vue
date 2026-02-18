<script setup lang="ts">
const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileMenuEl = ref<HTMLElement | null>(null)

const navLinks = [
  { label: 'Reportage', to: '/reportage' },
  { label: 'Street Photo', to: '/street-photo' },
  { label: 'Portrait', to: '/portrait' },
  { label: 'Bio', to: '/bio' },
]

const mailtoHref = 'mailto:gregoirecolsonphotography@gmail.com'

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

watch(mobileMenuOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      const firstLink = mobileMenuEl.value?.querySelector('a')
      firstLink?.focus()
    })
  }
  else {
    document.body.style.overflow = ''
  }
})

function onMobileKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    mobileMenuOpen.value = false
  }

  if (e.key === 'Tab' && mobileMenuEl.value) {
    const focusable = mobileMenuEl.value.querySelectorAll<HTMLElement>('a, button')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    }
    else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-md">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Navigation principale">
      <NuxtLink to="/" class="text-xl font-semibold tracking-wide text-stone-100">
        Grégoire Colson
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-sm tracking-wider text-stone-400 uppercase transition-colors hover:text-accent"
            active-class="!text-accent"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <a
            :href="mailtoHref"
            class="text-stone-400 transition-colors hover:text-accent"
            aria-label="Envoyer un email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        class="text-stone-400 md:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Menu de navigation"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile nav -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        ref="mobileMenuEl"
        class="border-t border-stone-800/50 bg-stone-950/95 backdrop-blur-md md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        @keydown="onMobileKeydown"
      >
        <ul class="flex flex-col gap-1 px-6 py-4">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block rounded-lg px-4 py-3 text-sm tracking-wider text-stone-400 uppercase transition-colors hover:bg-stone-900 hover:text-accent"
              active-class="!text-accent !bg-stone-900"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <a
              :href="mailtoHref"
              class="flex items-center gap-2 rounded-lg px-4 py-3 text-sm tracking-wider text-stone-400 uppercase transition-colors hover:bg-stone-900 hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

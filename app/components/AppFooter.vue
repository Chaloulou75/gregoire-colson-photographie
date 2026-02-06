<template>
  <footer class="border-t border-stone-800/50 bg-stone-950">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
      <p class="text-sm text-stone-500">
        &copy; {{ new Date().getFullYear() }} Grégoire Colson — Tous droits réservés
      </p>
      <div class="flex gap-6">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-stone-500 transition-colors hover:text-accent"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-stone-500 transition-colors hover:text-accent"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

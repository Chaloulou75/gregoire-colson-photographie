<template>
  <div class="flex min-h-screen flex-col bg-stone-950 font-sans text-stone-200">
    <a href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-stone-950">
      Aller au contenu principal
    </a>
    <AppHeader />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

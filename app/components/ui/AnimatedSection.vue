<script setup lang="ts">
const { target, isVisible } = useScrollAnimation()
</script>

<template>
  <div ref="target" class="fade-up" :class="{ 'is-visible': isVisible }">
    <slot />
  </div>
</template>

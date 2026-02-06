<script setup lang="ts">
const props = defineProps<{
  label: string
  name: string
  type?: string
  required?: boolean
  rows?: number
  error?: string
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isTextarea = computed(() => props.type === 'textarea')
</script>

<template>
  <div>
    <label :for="name" class="mb-2 block text-sm tracking-wider text-stone-400 uppercase">
      {{ label }}
      <span v-if="required" class="text-accent">*</span>
    </label>
    <component
      :is="isTextarea ? 'textarea' : 'input'"
      :id="name"
      :name="name"
      :type="isTextarea ? undefined : (type || 'text')"
      :rows="isTextarea ? (rows || 5) : undefined"
      :required="required"
      :value="modelValue"
      class="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-200 transition-colors placeholder:text-stone-600 focus:border-accent focus:outline-none"
      :class="{ '!border-red-500': error }"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="mt-1 text-sm text-red-400">{{ error }}</p>
  </div>
</template>

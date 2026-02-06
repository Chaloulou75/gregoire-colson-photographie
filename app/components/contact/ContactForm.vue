<script setup lang="ts">
const config = useRuntimeConfig()
const formspreeId = config.public.formspreeId as string

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive<Record<string, string>>({})
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

function validate(): boolean {
  const newErrors: Record<string, string> = {}

  if (!form.name.trim()) newErrors.name = 'Le nom est requis.'
  if (!form.email.trim()) {
    newErrors.email = 'L\'email est requis.'
  }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'L\'email n\'est pas valide.'
  }
  if (!form.message.trim()) newErrors.message = 'Le message est requis.'

  Object.assign(errors, newErrors)
  // Clear errors that are now valid
  for (const key of Object.keys(errors)) {
    if (!newErrors[key]) delete errors[key]
  }

  return Object.keys(newErrors).length === 0
}

async function onSubmit() {
  if (!validate()) return

  status.value = 'sending'

  try {
    await $fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: form,
    })
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }
  catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <div class="grid gap-6 sm:grid-cols-2">
      <ContactFormField
        v-model="form.name"
        label="Nom"
        name="name"
        required
        :error="errors.name"
      />
      <ContactFormField
        v-model="form.email"
        label="Email"
        name="email"
        type="email"
        required
        :error="errors.email"
      />
    </div>

    <ContactFormField
      v-model="form.subject"
      label="Objet"
      name="subject"
    />

    <ContactFormField
      v-model="form.message"
      label="Message"
      name="message"
      type="textarea"
      required
      :error="errors.message"
    />

    <button
      type="submit"
      :disabled="status === 'sending'"
      class="inline-block border border-accent px-8 py-3 text-sm tracking-widest text-accent uppercase transition-all hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {{ status === 'sending' ? 'Envoi en cours…' : 'Envoyer' }}
    </button>

    <p v-if="status === 'success'" class="text-sm text-green-400">
      Merci ! Votre message a bien été envoyé.
    </p>
    <p v-if="status === 'error'" class="text-sm text-red-400">
      Une erreur est survenue. Veuillez réessayer.
    </p>
  </form>
</template>

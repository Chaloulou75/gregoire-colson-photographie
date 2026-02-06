import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/seo'],

  site: {
    url: 'https://gregoirecolson.com',
    name: 'Grégoire Colson — Photographe',
    description: 'Portfolio de Grégoire Colson, photographe professionnel. Portrait, paysage, architecture, reportage et mariage.',
    defaultLocale: 'fr',
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Grégoire Colson',
      url: 'https://gregoirecolson.com',
      jobTitle: 'Photographe',
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  image: {
    quality: 80,
    format: ['webp', 'avif'],
    providers: {
      cloudinary: {
        name: 'cloudinary',
        provider: 'cloudinary',
        options: {
          baseURL: process.env.CLOUDINARY_URL || 'https://res.cloudinary.com/demo/image/upload/',
        },
      },
    },
  },

  fonts: {
    families: [
      { name: 'Playfair Display', weights: [400, 500, 600, 700] },
      { name: 'Inter', weights: [300, 400, 500, 600] },
    ],
  },

  app: {
    htmlAttrs: { lang: 'fr' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    strapi: {
      url: process.env.STRAPI_URL || '',
      token: process.env.STRAPI_TOKEN || '',
    },
    public: {
      formspreeId: process.env.FORMSPREE_ID || 'your-formspree-id',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  hooks: {
    async 'prerender:routes'(ctx) {
      const strapiUrl = process.env.STRAPI_URL
      const strapiToken = process.env.STRAPI_TOKEN
      if (!strapiUrl || !strapiToken) return

      try {
        const res = await fetch(`${strapiUrl}/api/projects?fields[0]=slug`, {
          headers: { Authorization: `Bearer ${strapiToken}` },
        })
        const { data } = await res.json() as { data: { slug: string }[] }
        for (const project of data) {
          ctx.routes.add(`/portfolio/${project.slug}`)
        }
      }
      catch {
        // Strapi unavailable — static data fallback
      }
    },
  },
})

import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: '5 Letter Word Indo Finder',
      titleTemplate: '%s | Five Letter Word Indo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Solver cerdas dan cepat untuk Wordle (NYT) dan Katla Indonesia. Temukan kata 5 huruf dengan mudah menggunakan filter warna.' },
        { name: 'keywords', content: 'wordle solver, katla solver, jawaban katla hari ini, tebak kata 5 huruf, wordle indonesia helper' },
        { name: 'author', content: 'Five Letter Word Indo' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔍</text></svg>'
        }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-09',
  app: {
    head: {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
      ],
    },
  },

  devtools: { enabled: true },

  ssr: false,

  modules: ['@nuxt/ui', '@vueuse/nuxt'],

  experimental: {
    viewTransition: true,
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  colorMode: {
    preference: 'light',
  },

  css: ['@/assets/style/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        },
      },
    },
  },
})

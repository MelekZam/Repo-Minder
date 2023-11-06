export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  css: [
    '~/assets/styles/desktop.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: 
            '@use "@/assets/styles/globals/_vars.scss" as *;'
        }
      }
    }
  },
    devtools: { enabled: true },
})
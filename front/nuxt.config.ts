export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: 
            '@use "@/assets/styles/globals/_globals.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: true },
})
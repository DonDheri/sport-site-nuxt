// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      apiKey: ''
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  components: {
    dirs: [
      '~/components/content',
      '~/components/info',
      '~/components/partials',
    ]
  }
})

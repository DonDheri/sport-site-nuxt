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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  components: {
    dirs: [
      '~/components/content',
      '~/components/info',
      '~/components/partials',
    ]
  },
  build: {
    transpile: [
      "@vuepic/vue-datepicker"
    ]
  },
  
})

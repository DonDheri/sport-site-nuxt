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
    '@nuxtjs/color-mode',
  ],
  
  components: {
    dirs: [
      '~/components/content',
      '~/components/info',
      '~/components/partials',
      '~/data/sportsData',
      '~/components/league',
      '~/components/match',
      '~/components/phoneContent/league',
      '~/components/phoneContent/match',
    ]
  },
  build: {
    transpile: [
      "@vuepic/vue-datepicker"
    ]
  },
  
    
})

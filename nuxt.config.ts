// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/setup/fonts.scss";
            @import "@/assets/scss/setup/variables.scss";
            @import "@/assets/scss/setup/typography.scss";
            @import "@/assets/scss/setup/mixins.scss";
            @import "@/assets/scss/setup/default.scss";
            @import "@/assets/scss/setup/layouts.scss";
          `
        }
      },
    }
  },

  css: ['~/assets/scss/main.scss'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Vitesse for Nuxt 3' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    }
  },

  devtools: { enabled: true },
})

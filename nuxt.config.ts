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

  devtools: { enabled: true },
})

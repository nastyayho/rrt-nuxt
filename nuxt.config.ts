// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/scss/main.scss'],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @import "@/assets/scss/setup/fonts.scss";
            @import "@/assets/scss/setup/variables.scss";
            @import "@/assets/scss/setup/mixins.scss";
          `,
                },
            },
        },
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', href: '/img/favicon.ico', sizes: 'any' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            ],
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { name: 'description', content: 'Vitesse for Nuxt 3' },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'black-translucent',
                },
            ],
        },
    },

    devtools: { enabled: true },

    modules: [ 
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],

    extensions: ['ts', 'js'],
});

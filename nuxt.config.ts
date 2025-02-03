export default defineNuxtConfig({

  devtools: { enabled: false },

  app: {
    pageTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: "Amyal",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "ar", class: "html_direction" },
      meta: [
        { name: "description", content: "موقع اميال لتاجير السيارات" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/sm-logo.svg" },
      ],
    },
  },

  // primevue
  modules: [
    'nuxt-primevue',
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
  ],
  
    alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },

  css: [
    "bootstrap/dist/css/bootstrap.rtl.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primevue/resources/primevue.min.css",
    "~/assets/css/style.scss",
  ],


  primevue: {
    usePrimeVue: true,
    options: {},
    importPT: undefined,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    directives: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      // prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

})



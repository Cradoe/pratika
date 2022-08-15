export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'broabeg',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/css/tailwind.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ '~/plugins/vuelidate',
    //  '~/plugins/vue-query' 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // For image optimization
  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    // For image optimization
    '@nuxt/image',
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],
  colorMode: {
    classSuffix: '',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://image.nuxtjs.org/getting-started/installation/
    // '@nuxt/image',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],

  // Nuxt image optimization
  image: {
    providers: {
      customProvider: {
        name: 'NextProject', // optional value to overrider provider name
        provider: '~/providers/NextProject', // Path to custom provider
        options: {
          // ... provider options
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  // Fontawesome module configuration: https://www.npmjs.com/package/@nuxtjs/fontawesome
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  router: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  // redirect to error page if error
  generate: { fallback: true },

  // https://google-analytics.nuxtjs.org/setup
  googleAnalytics: {
    id: 'G-DJ4D87N5SP'
  }
}

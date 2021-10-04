import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // mode: 'universal',
  target: 'static',
  generate: {
    async routes() {
      const pages = await axios.get('https://runtrainingnote.microcms.io/api/v1/blog?limit=400', {
        headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
      })
      .then((res) =>
        res.data.contents.map((content) => ({
          route: `/${content.id}`,
          payload: content
        })
      ))
      // console.log(pages)
      return pages
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://runtore.com',
    generate: true,
    async routes() {
      const pages = await axios.get('https://runtrainingnote.microcms.io/api/v1/blog?limit=400', {
        headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
      })
      .then((res) =>
        res.data.contents.map((content) => ({
          route: `/${content.id}/`,
          payload: content
        })
      ))
      return pages
    }
  },
  robots: {
    /* module options */
    UserAgent: '*',
    Sitemap: "https://runtore.com/sitemap.xml"
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - 大人のRUNトレ練習帳',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: '大人のRUNトレ練習帳' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://example.com' },
      { hid: 'og:title', property: 'og:title', content: '大人のRUNトレ練習帳' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:image', property: 'og:image', content: '/first.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/style.scss",
    "@/assets/common.scss",
    "@/assets/transition.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/vue-select-image',
      mode: 'client'
    },
    '@/plugins/vue-scrollto',
    "@/plugins/firebase.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-141607979-5' //自身のアナリティクスコード
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light:{
          primary: "#00ADFF",
          secondary:"#FFE200"
        },
        dark: {
          primary: "#00ADFF",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

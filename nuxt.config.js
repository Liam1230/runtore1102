import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    async routes() {
      const pages = await axios.get('https://valuup.microcms.io/api/v1/blog?limit=100', {
        headers: { 'X-API-KEY': '66a46bb5-4cfd-4a48-903d-cd75f0ad4cd6' }
      })
      .then((res) =>
        res.data.contents.map((content) => ({
          route: `/${content.id}`,
          payload: content
        })
      ))
      return pages
    }
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - valuupHP2021',
    title: 'valuupHP2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
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
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      if (!isDev && isClient) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue'),
              path.join(__dirname, './node_modules/vuetify/dist/vuetify.js')
            ]),
            whitelist: ['v-application', 'v-application--wrap','layout','row','col'],
            whitelistPatterns: [
              /^v-((?!application).)*$/,
              /^theme--*/,
              /.*-transition/,
              /^justify-*/,
              /^p*-[0-9]/,
              /^m*-[0-9]/,
              /^text--*/,
              /--text$/,
              /^row-*/,
              /^col-*/,   
            ],
            whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/]
          })
        )
      }
    }
  }
}

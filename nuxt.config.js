export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/semantic.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/load-particles', '@plugins/load-includes', '@plugins/axios'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Environment Variables
   */
  env: {
    apiBaseUrl: process.env.apiBaseUrl || 'https://api.xyz.dev'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  generate: {
    dir: 'public'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['../../theme.config$'] = '~/assets/styles/theme.config';
    }
  }
};

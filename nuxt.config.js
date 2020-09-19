module.exports = {
  /*
  ** Headers of the page
  */

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: "pro_tpa",
          path: "/tpapolicy/pro_tpa/",
          component: resolve(__dirname, "pages/tpa/tpapolicy/pro_tpa.vue")
        },
        {
          name: "edu_tpa",
          path: "/tpapolicy/edu_tpa/",
          component: resolve(__dirname, "pages/tpa/tpapolicy/edu_tpa.vue")
        },
        {
          name: "infosurvey_one",
          path: "/tpainfosurvey/infosurvey_one",
          component: resolve(__dirname, "pages/tpa/tpainfosurvey/infosurvey_one.vue")
        },
        {
          name: "infosurvey_two",
          path: "/tpainfosurvey/infosurvey_two",
          component: resolve(__dirname, "pages/tpa/tpainfosurvey/infosurvey_two.vue")
        },
        {
          name: "infosurvey_three",
          path: "/tpainfosurvey/infosurvey_three",
          component: resolve(__dirname, "pages/tpa/tpainfosurvey/infosurvey_three.vue")
        },
        {
          name: "userinfo",
          path: "/tpainfoquery/userinfo",
          component: resolve(__dirname, "pages/tpa//tpainfoquery/userinfo.vue")
        }
      );
    }
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    {src: '~/plugins/ElementUI', ssr: true }
  ],
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],

  // css: [
  //   'iview/dist/styles/iview.css'
  // ],
  // plugins: [
  //   {src: '~plugins/iview.js', ssr: true}
  // ],
  head: {
    title: '保康县农村综合服务信息平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    transpile: [/^element-ui/]
  }
}


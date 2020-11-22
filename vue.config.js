const isProduction = process.env.NODE_ENV === 'production'

let externals = {}
if (isProduction) {
  // key: import中的引用名称
  // value: 使用js引入时挂在到window下的变量名,对于css随便写个window下存在的变量名
  externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    'element-ui': 'ELEMENT',
    'element-ui/lib/theme-chalk/index.css': 'ELEMENT'
  }
}

module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    externals: externals
  },
  chainWebpack (config) {
    // 打包后标签不加 prefetch preload
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugin('html').tap(args => {
      args[0].extCssArr = [
        'https://cdn.staticfile.org/element-ui/2.14.1/theme-chalk/index.css'
      ]
      args[0].extJsArr = [
        'https://cdn.staticfile.org/vue/2.6.11/vue.runtime.min.js',
        'https://cdn.staticfile.org/vuex/3.2.0/vuex.min.js',
        'https://cdn.staticfile.org/vue-router/3.2.0/vue-router.min.js',
        'https://cdn.staticfile.org/element-ui/2.14.1/index.js'
      ]
      return args
    })
  }
}

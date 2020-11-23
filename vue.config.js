const prettier = require('prettier')
const isProduction = process.env.NODE_ENV === 'production'

// 不需要打包到bundle的代码，使用CDN引入
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

// HtmlwebpackPlugin Hooks 调用
class MyHtmlwebpackPluginExt {
  constructor () {
    this.name = 'MyHtmlwebpackPluginExt'
    this.extCssArr = [
      'https://cdn.staticfile.org/element-ui/2.14.1/theme-chalk/index.css'
    ]
    this.extJsArr = [
      'https://cdn.staticfile.org/vue/2.6.11/vue.runtime.min.js',
      'https://cdn.staticfile.org/vuex/3.2.0/vuex.min.js',
      'https://cdn.staticfile.org/vue-router/3.2.0/vue-router.min.js',
      'https://cdn.staticfile.org/element-ui/2.14.1/index.js'
    ]
  }

  apply (compiler) {
    const ID = this.name
    // 插入CDN资源
    compiler.hooks.compilation.tap(ID, compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(ID, data => {
        data.assets.css = this.extCssArr.concat(data.assets.css)
        data.assets.js = this.extJsArr.concat(data.assets.js)
      })
      // 强迫症的最爱
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(ID, data => {
        data.html = prettier.format(data.html, { parser: 'html', printWidth: 999 })
      })
    })
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
    externals: externals,
    plugins: [new MyHtmlwebpackPluginExt()]
  },
  chainWebpack (config) {
    // 打包后标签不加 prefetch preload
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}

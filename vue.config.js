// process.env.NODE_ENV === 'development'; // 或简写 dev，意为开发环境
// process.env.NODE_ENV === 'production'; // 或简写 prod，意为生产环境
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 判断是否生产环境
// const isDev = process.env.NODE_ENV === 'development' // 开发环境

// 去除冗余的css
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')

//  开启 gzip 压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  assetsDir: 'assets', // 静态资源目录
  outputDir: './dist', // 输出文件目录
  productionSourceMap: false, // 去除map文件
  chainWebpack: config => {
    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    port: 8033, // 端口号
    https: false, // https:{type:Boolean}
    hot: true, // 热更新
    proxy: {
      // 跨域处理
      '/api': {
        // 将 www.exaple.com 印射为/apis
        target: 'https://minku.deeptel.com.cn/', // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 需要rewrite的,
        }
      }
    }
  },
  // webpack-dev-server 相关配置
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      plugins.push(
        new PurgeCSSPlugin({
          // webpack自动化去除重复代码
          paths: [
            path.join(__dirname, './public/index.html'),
            ...glob.sync(path.join(__dirname, './src/**/*.vue')),
            ...glob.sync(path.join(__dirname, './src/**/*.js')),
            ...glob.sync(path.join(__dirname, './src/**/*.ts')),
            ...glob.sync(path.join(__dirname, './src/**/*.tsx'))
          ]
        }),
        new CompressionWebpackPlugin({
          // gzip 压缩
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}

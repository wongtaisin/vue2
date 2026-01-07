// process.env.NODE_ENV === 'development'; // 或简写 dev，意为开发环境
// process.env.NODE_ENV === 'production'; // 或简写 prod，意为生产环境
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 判断是否生产环境
// const isDev = process.env.NODE_ENV === 'development' // 开发环境

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_SRC || '/static/app/' : './', // 访问资源地址
  assetsDir: 'assets', // 静态资源目录
  outputDir: './dist', // 输出文件目录
  productionSourceMap: false, // 去除map文件
  css: {
    requireModuleExtension: true, // 启用 CSS modules
    extract: IS_PROD ? true : false, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps，一般不建议开启
    loaderOptions: {
      // css预设器配置项
      sass: {
        //设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        prependData: `@import '@/assets/css/mixin.scss';`
      }
    }
  },
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    port: 8099, // 端口号
    https: false, // https:{type:Boolean}
    hotOnly: true, // 热更新
    overlay: {
      // 编译器错误或警告
      warnings: false,
      errors: true
    },
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
  }
}

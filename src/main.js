import Vue from 'vue'
import App from '@/App.vue'
import install from '@/components/common/index' // 全局安装
import router from '@/router/index' // 路由
import store from '@/store/index' // vuex
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/css/common.scss'
import '@/assets/iconfont/iconfont.css'

install(Vue)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: h => h('router-view')
})
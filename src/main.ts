import { createApp } from 'vue'

import App from './App.vue'
import install from './components/common/index' // 全局安装
import router from './router/index' // 路由
import store from './store/index' // vuex

import './assets/css/common.scss'
import './assets/iconfont/iconfont.css'

const app = createApp(App)
install(app)
app.use(router).use(store).mount('#app')

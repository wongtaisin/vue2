import app from '../App.vue'
import home from '../views/home/router/index'

const routes: any = [
  {
    path: '/',
    name: 'app',
    component: app,
    redirect: '/index',
    children: [...home]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes

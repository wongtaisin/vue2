import app from '@/App.vue'
import home from '@/views/home/router'
import user from '@/views/user/router'

const routes = [{
  path: '/',
  name: 'app',
  component: app,
  children: [
    ...home,
    ...user,
  ],
},
{
  path: '*',
  redirect: '/404'
}
]

export default routes
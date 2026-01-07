import home from '../views/home/router/index'
import user from '../views/user/router/index'

const routes: any = [
  ...home,
  ...user,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes

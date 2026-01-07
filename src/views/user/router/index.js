const _import = index => import(/* webpackChunkName: "user" */ `@/views/user/${index}`)

export default [
  {
    path: '/user',
    component() {
      return _import('index')
    },
    name: 'page-user',
    meta: {
      grade: 2,
      type: 'page-user',
      title: 'user'
    }
  },
  {
    path: '/user/detail',
    component() {
      return _import('detail')
    },
    name: 'page-detail',
    meta: {
      grade: 3,
      type: 'page-detail',
      title: 'detail'
    }
  }
]

import commonScroll from './src/main'

/* istanbul ignore next */
commonScroll.install = function (Vue) {
  Vue.component(commonScroll.name, commonScroll)
}

export default commonScroll

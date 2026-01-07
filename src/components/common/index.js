import commonScroll from './commonScroll/index'
import directives from './directives/index' // 公共指令
import utils from './utils/index'

const components = [
  commonScroll
]

const install = function (Vue) {
  Vue.prototype.$utils = utils
  components.map(component => {
    Vue.component(component.name, component)
  })
  for (let item in directives) {
    Vue.directive(item, directives[item])
  }
}

export default install
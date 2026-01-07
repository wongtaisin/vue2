import commonScroll from './commonScroll/index'
import directives from './directives/index' // 公共指令
import utils from './utils/index'

const components = [commonScroll]

const install = function (app) {
  app.config.globalProperties.$utils = utils
  components.map(component => {
    console.log(component)
    app.component(component.name, component)
  })
  for (const item in directives) {
    app.directive(item, directives[item])
  }
}

export default install

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
const homeBasicSetting = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
export default homeBasicSetting

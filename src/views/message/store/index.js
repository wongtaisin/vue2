import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
const message = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
export default message

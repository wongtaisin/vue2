import commonMutations from './common/mutations'
import systemSettingMutations from './systemsetting/mutations'

const mutations = {
  manyUnit(state, data) {
    state.manyUnit = data
  },
  manyUnitUpdate(state, data) {
    state.manyUnitUpdate = data
  },
  singleUnit(state, data) {
    state.singleUnit = data
  },
  getClass(state, data) {
    state.getClass = data
  },
  getChildClass(state, data) {
    state.getChildClass = data
  },
  getSupplier(state, data) {
    state.getSupplier = data
  },
  getAttr(state, data) {
    state.getAttr = data
  },
  getChildAttr(state, data) {
    state.getChildAttr = data
  },
  customerSupplierDetail(state, data) {
    state.customerSupplierDetail = data
  },
}

export default Object.assign(commonMutations, mutations, systemSettingMutations)

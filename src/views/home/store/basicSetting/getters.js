import commonGetters from './common/getters'
import systemSettingGetters from './systemsetting/getters'
const getters = {
    manyUnit(state) {
        return state.manyUnit
    },
    manyUnitUpdate(state) {
        return state.manyUnitUpdate
    },
    singleUnit(state) {
        return state.singleUnit
    },
    getClass(state) {
        return state.getClass
    },
    getChildClass(state) {
        return state.getChildClass
    },
    getSupplier(state) {
        return state.getSupplier
    },
    getAttr(state) {
        return state.getAttr
    },
    getChildAttr(state) {
        return state.getChildAttr
    },
    customerSupplierDetail(state) {
        return state.customerSupplierDetail
    }
}
export default Object.assign(commonGetters, getters, systemSettingGetters)

import commonState from './common/state'
import systemSettingState from './systemsetting/state'
const state = {
  manyUnit: {
    data: [],
    totalPages: 1
  },
  singleUnit: {
    data: [],
    totalPages: 1
  },
  manyUnitUpdate: {
    name: '',
    viceUnits: [{
      num: '',
      viceUnitName: '',
      conversion: ''
    }]
  },
  getClass: {
    data: [],
    totalPages: 1
  },
  getChildClass: {
    data: [],
    totalPages: 1
  },
  getSupplier: {
    data: [],
    totalPages: 1
  },
  getAttr: {
    data: [],
    totalPages: 1
  },
  getChildAttr: {
    data: [],
    totalPages: 1
  },
  customerSupplierDetail: null
}
export default Object.assign(state, commonState, systemSettingState)

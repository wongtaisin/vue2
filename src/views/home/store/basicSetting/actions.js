import axios from '@/api/index'
import commonActions from './common/actions'
import systemSettingActions from './systemsetting/actions'

const actions = {
  // 获取多单位
  manyUnit({ commit, state }, params) {
    const _data = params
      ? params.paramsDate
      : {
          pageIndex: 1,
          pageCount: 25
        }
    if (_data.pageIndex === 1) {
      commit('manyUnit', {
        data: [],
        totalPages: 1
      })
    }
    axios({
      method: 'get',
      url: '/news/unit/more/all',
      params: _data,
      data: ''
    }).then(res => {
      commit('manyUnit', {
        data: [...state.manyUnit.data, ...(res.data.data.content || [])],
        totalPages: res.data.data.totalPages
      })
      if (params) params.callBack()
    })
  },
  // 编辑新增多单位
  manuUnitUpdate({ commit }, params) {
    axios({
      method: 'post',
      url: '/news/unit/more/add/update',
      data: params.paramsDate
    }).then(res => {
      if (res.data.code === 1001) params.callBack(true)
      else {
        // _utils.tipMessage(res.data.msg)
        params.callBack(false)
      }
    })
  }
}

export default Object.assign(commonActions, actions, systemSettingActions)

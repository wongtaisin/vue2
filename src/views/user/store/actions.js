import axios from '@/api/index'

const actions = {
  getCount({ commit, state }, params) {
    let paramsNumber = params.paramsDate ? params.paramsDate : params.paramsInit
    axios({
      method: 'get',
      url: '/news/stock/get/pros',
      params: paramsNumber
    }).then(res => {
      if (res.data.code === 1001) {
        if (paramsNumber.profit === 5) {
          if (paramsNumber.pageIndex === 1) {
            commit('getCountFive', {
              data: [],
              totalPages: 1,
              totalElements: 0
            })
          }
          commit('getCountFive', {
            data: [...state.getCountFive.data, ...(res.data.data.content || [])],
            totalPages: res.data.data.totalPages,
            totalElements: res.data.data.totalElements
          })
        } else {
          if (paramsNumber.pageIndex === 1) {
            commit('getCount', {
              data: [],
              totalPages: 1
            })
          }
          commit('getCount', {
            data: [...state.getCount.data, ...(res.data.data.content || [])],
            totalPages: res.data.data.totalPages
          })
        }
        params.callBack()
      } // else _utils.tipMessage(res.data.msg)
    })
  }
}

export default actions

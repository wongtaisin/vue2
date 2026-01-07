import axios from '@/api'

const actions = {
  getWater({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/news/sis/pros/records/sts',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 1001) {
        if (params.paramsDate.pageIndex === 1) {
          commit('getWater', {
            res: {},
            list: [],
            totalPages: 1
          })
        }
        commit('getWater', {
          res: res.data.data,
          list: [...state.getWater.list, ...res.data.data.content || []],
          totalPages: res.data.data.totalPages
        })
        params.callBack()
      } // else _utils.tipMessage(res.data.msg)
    })
  }
}

export default actions

import axios from '@/axios'

const actions = {
  // 获取商品信息
  attrsGetAllAttr({ commit, state }, params) {
    axios({
      method: 'get',
      url: '/news/product/all/attrs',
      params: params.paramsDate,
      data: ''
    }).then(res => {
      if (res.data.code === 1001) {
        params.callBack()
        if (params.paramsDate.pageIndex === 1) {
          commit('attrsGetAllAttr', {
            data: [],
            totalPages: 1
          })
        }
        commit('attrsGetAllAttr', {
          data: [...state.attrsGetAllAttr.data, ...(res.data.data.content || [])],
          totalPages: res.data.data.totalPages
        })
      } // else _utils.tipMessage(res.data.msg)
    })
  },
  // 删除某个商品
  attrsDelAttr({ commit }, params) {
    axios({
      method: 'delete',
      url: '/news/product/app/del/' + params.paramsDate
    }).then(res => {
      if (res.data.code === 1001) params.callBack()
      // else _utils.tipMessage(res.data.msg)
    })
  }
}
export default actions

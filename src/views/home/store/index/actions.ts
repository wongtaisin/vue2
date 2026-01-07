import axios from '@/axios/index'

const actions = {
  // 获取门店
  getShop({ commit, state }, params) {
    axios({
      method: 'get',
      url: '/news/core/get/shops'
    }).then(res => {
      if (res.data.code === 1001) {
        commit('getShop', res)
        params.callBack()
      } // else _utils.tipMessage(res.data.msg)
    })
  }
}
export default actions

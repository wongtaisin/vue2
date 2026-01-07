import axios from '@/api/index'

const actions = {
  // 获取门店
  getShop({ commit, state }, params) {
    if (state.getShop !== '') {
      commit('getShop', {
        data: []
      })
    }
    axios({
      method: 'get',
      url: '/news/core/get/user'
    }).then(data => {
      var _that = data.data.data
      axios({
        method: 'get',
        url: '/news/core/get/shops'
      }).then(res => {
        if (res.data.code === 1001) {
          if (_that.rootId === _that.uid) {
            var firstShop = [
              {
                shopId: 0,
                name: '所有门店'
              }
            ]
            var allShop =
              res.data.data.length === 1 ? res.data.data : firstShop.concat(res.data.data)
          } else var allShop = res.data.data
          commit('getShop', {
            data: [...state.getShop.data, ...allShop]
          })
          params.callBack()
        } // else _utils.tipMessage(res.data.msg)
      })
    })
  }
}
export default actions

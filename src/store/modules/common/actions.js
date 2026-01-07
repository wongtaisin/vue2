import axios from '@/api/index'

const actions = {
  commonPublic({ commit }, params) {
    axios({
      method: 'get',
      url: '/api/index/public'
    }).then(res => {
      if (res.data.code === 0) {
        _utils.tipMessage(res.data.code)
        if (res.data.data) {
          commit('commonPublic', {
            header: res.data.data.header,
            footer: res.data.data.footer
          })
        }
      } // else _utils.tipMessage(res.data.msg)
    })
  }
}
export default actions

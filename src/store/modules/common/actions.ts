import axios from '@/axios/index'

const actions = {
  commonPublic({ commit }, params) {
    axios({
      method: 'get',
      url: '/api/index/public',
      params
    }).then(res => {
      if (res.data.code === 0) {
        if (res.data.data) {
          commit('commonPublic', {
            header: res.data.data.header,
            footer: res.data.data.footer
          })
        }
      } // else Toast(res.data.msg)
    })
  }
}
export default actions

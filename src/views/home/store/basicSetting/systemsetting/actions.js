import axios from '@/api/index'

const actions = {
  // 获取系统设置
  systemsetGetSysset({ commit }) {
    axios({
      method: 'get',
      url: '/news/sysset/get/sysset'
    }).then(res => {
      if (res.data.code === 1001) {
        if (res.data.data) commit('systemsetGetSysset', res.data.data)
      } // else _utils.tipMessage(res.data.msg)
    })
  }
}

export default actions

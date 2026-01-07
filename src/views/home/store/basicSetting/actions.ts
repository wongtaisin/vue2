import axios from '@/axios/index'
import commonActions from './common/actions'
import systemSettingActions from './systemsetting/actions'

const actions = {
  manuUnitUpdate({ commit }, params) {
    axios({
      method: 'post',
      url: '/news/unit/more/add/update',
      data: params.paramsDate
    }).then(res => {
      if (res.data.code === 1001) {
        params.callBack(true)
      } // else _utils.tipMessage(res.data.msg)
    })
  }
}

export default Object.assign(commonActions, actions, systemSettingActions)

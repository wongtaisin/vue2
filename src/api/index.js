import axios from 'axios'
// import Promise from 'promise'

const IS_PROD = Object.is(process.env.NODE_ENV, 'production')
const IS_TYPE = IS_PROD ? '' : '/api'
console.log(IS_TYPE)

axios.defaults.baseURL = IS_TYPE
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=UTF-8',
  'Access-Control-Allow-Origin': '*'
}
axios.defaults.responseType = 'json'
axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

axios.interceptors.response.use(
  response => {
    if (response.data.code !== 0) window.location.href = '/login' // 是否有登录
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// response 响应的拦截
axios.interceptors.response.use(
  response => {
    const config = response.config
    if (response.data.code === 1003) {
      // 错误断连
      if (!config || !config.retry) return Promise.reject(response) // 如果配置不存在或未设置重试选项，则拒绝

      config.__retryCount = config.__retryCount || 0 // 设置变量以跟踪重试过程

      // 检查我们是否已经将重试的总数最大化
      if (config.__retryCount >= config.retry) {
        return Promise.reject(response) // 错误拒绝
      }

      config.__retryCount += 1 // 增加重试计数

      // 创造新的承诺，以处理指数后退
      const backoff = new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, config.retryDelay || 1)
      })

      // 返回承诺，其中回忆axios重试请求
      return backoff.then(() => {
        return axios(config)
      })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios

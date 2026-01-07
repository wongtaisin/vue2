import axios from 'axios'

const IS_PROD: boolean = Object.is(process.env.NODE_ENV, 'production')
const IS_TYPE: string = IS_PROD ? '' : '/api'
console.log(IS_PROD, IS_TYPE)

axios.defaults.baseURL = IS_TYPE
axios.defaults.timeout = 10000
axios.defaults.withCredentials = false
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.responseType = 'json'

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// response 响应的拦截
// axios.interceptors.response.use(
//   response => {
//     const config: object = response.config
//     config.retry = 4
//     config.retryDelay = 1000
//     if (response.data.code === 1003) { // 错误断连
//       if (!config || !config.retry) return Promise.reject(response) // 如果配置不存在或未设置重试选项，则拒绝

//       config.__retryCount = config.__retryCount || 0 // 设置变量以跟踪重试过程

//       // 检查我们是否已经将重试的总数最大化
//       if (config.__retryCount >= config.retry) {
//         return Promise.reject(response) // 错误拒绝
//       }

//       config.__retryCount += 1 // 增加重试计数

//       // 创造新的承诺，以处理指数后退
//       const backoff = new Promise((resolve) => {
//         setTimeout(() => {
//           resolve()
//         }, config.retryDelay || 1)
//       })

//       // 返回承诺，其中回忆axios重试请求
//       return backoff.then(() => {
//         return axios(config)
//       })
//     }
//     return response
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export default axios

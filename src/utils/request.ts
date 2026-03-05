import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '/dev-api',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    
    // 如果返回的状态码不是200，则认为是错误
    if (res.code !== undefined && res.code !== 200) {
      console.error('接口错误:', res.msg || '请求失败')
      return Promise.reject(new Error(res.msg || '请求失败'))
    }
    
    return res
  },
  error => {
    console.error('响应错误:', error)
    return Promise.reject(error)
  }
)

export default service

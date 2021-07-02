import axios from 'axios'

const service = axios.create({
  timeout: 60 * 1000,
  headers: { 'Content-Type': 'application/json' },
  baseURL: process.env.VUE_APP_BASE_API,
})

service.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service

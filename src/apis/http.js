import axios from 'axios'
import {Message} from 'element-ui'

const ENV = process.env.NODE_ENV
let BASE_URL = ''
if(ENV === 'development') {
    BASE_URL = 'http://localhost:8080'
}else if(ENV === 'production') {

}else if(ENV === 'test') {

}

//创建axios实例
const http = axios.create({
    baseURL:BASE_URL,
    timeout:30000
})

//添加request拦截器
http.interceptors.request.use(config => {
    
},error => {
    Promise.reject(error)
})

//添加response拦截器
http.interceptors.response.use(response => {

},error => {
    
})

export function get(url, params = {}, headers) {
    return http({
      url,
      method: 'GET',
      headers:headers || {
       
      },
      params
    })
}
  
  //封装post请求
export function post(url, data = {}, header) {
    let headers = header || {
        'Content-Type': 'application/json;charset=UTF-8'
      }
      

    return http({
      url,
      method: 'POST',
      headers: headers,
      data
    })
}

// 封装delete请求
export function del (url, params, headers) {
    return http({
        url,
        method: 'DELETE',
        headers:headers || {},
        params
    })
}

// 封装put请求
export function put(url, data = {}, header) {
    let headers = header || {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    return http({
      url,
      method: 'PUT',
      headers: headers,
      data
    })
}
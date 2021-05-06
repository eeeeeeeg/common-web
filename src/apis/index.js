import { get , post, del, put } from './http'

export default {
    install(Vue) {
        Vue.prototype.$get = (url, params,headers) => get(url,params, headers)
        Vue.prototype.$post = (url, data, headers) => post(url,data, headers)
        Vue.prototype.$delete = (url, params, headers) => del(url,params, headers)
        Vue.prototype.$put = (url, data, headers) => put(url,data, headers)
    }
}
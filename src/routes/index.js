import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = [
    {
        Path:'/',
        redirect:''
    }
]
export default new Router({
    mode: 'history',
    routes
})
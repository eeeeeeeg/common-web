import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../pages/layout/index.vue'
import Home from '../pages/home/index.vue'
Vue.use(Router)
const routes = [
    {
        path: '/',
        redirect: Home,
    },
    {
        path: '/layout',
        component: Layout,
        children:[
            {
                path: '/home',
                component: Home
            }
        ]
    },
]
export default new Router({
    mode: 'history',
    routes
})
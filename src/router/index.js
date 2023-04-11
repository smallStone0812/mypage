// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'



// 使用VueRouter
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // 路由定向
        redirect: '/login'
    },
    {
        path: '/home',
        component: () => import('../views/myHome')
    },
    {
        path: "/about",
        component: () => import('../views/myAbout')
    },
    {
        path: "/login",
        component: () => import('../views/loginPage')
    },
    {
        path: "/zhihuishu",
        component: () => import('../views/indexPage')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router

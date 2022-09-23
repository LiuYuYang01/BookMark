import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home';
import Login from '@/components/Login';
import No from '@/view/No';

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            // 404页
            path:'*',
            component: No
        },
        {
            // 默认页
            path:'/',
            redirect:'/home'
        },
        {
            // 主页
            path:'/home',
            component: Home
        },
        {   
            // 登录页
            path:'/login',
            component: Login
        },

    ]
})

export default router
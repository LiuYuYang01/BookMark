// Name：BookMark
// Author：刘宇阳
// GitHub：https://github.com/LiuYuYang01/BookMark
// describe：有些梦虽然遥不可及，但并不是不可能实现！

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home';
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
        }
    ]
})

export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home';
import No from '@/view/No';

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'*',
            component: No
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: Home
        }
    ]
})

export default router
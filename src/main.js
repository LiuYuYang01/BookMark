// Name：BookMark
// Author：刘宇阳
// GitHub：https://github.com/LiuYuYang01/BookMark
// describe：有些梦虽然遥不可及，但并不是不可能实现！

import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'

// 引入element UI
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)

// 引入字体图标
import '@/font/iconfont'

// 引入全局样式
import '@/style/main.css'
import '@/style/responsive.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

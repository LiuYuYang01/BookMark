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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

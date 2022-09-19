import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'

// 引入公共样式
import '@/style/main.css'

// 引入element UI
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)

// 引入字体图标
import '@/font/iconfont'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

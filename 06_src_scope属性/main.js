import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 使用插件



new Vue({
  el:'#app',
  render: h => h(App),
})

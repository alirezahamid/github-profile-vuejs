import Vue from 'vue'
import App from './App.vue'
import store from './store'
import EvaIcons from 'vue-eva-icons'

Vue.use(EvaIcons)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

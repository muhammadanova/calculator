import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Calculator from "./plugins/calculator-kit"
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Calculator)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

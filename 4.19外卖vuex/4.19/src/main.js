import Vue from 'vue'
import App from './App'

import store  from "./store/index"
import router from "./router/index"
Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

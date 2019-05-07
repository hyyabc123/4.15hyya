import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"

import myFooter from "./components/footer"
Vue.config.productionTip = false

Vue.component("myFooter",myFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

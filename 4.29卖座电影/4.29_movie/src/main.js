import Vue from 'vue'
import App from './App'
import router from './router'
import MyFooter from "./components/footer"

Vue.config.productionTip = false

Vue.component("myFooter",MyFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

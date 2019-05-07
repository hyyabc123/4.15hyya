import Vue from 'vue'
import App from './App'
import router from "./router/index"
import myFooter from "./components/footer"

Vue.config.productionTip = false
 
Vue.component("myFooter",myFooter)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

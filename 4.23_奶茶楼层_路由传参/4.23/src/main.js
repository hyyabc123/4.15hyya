import Vue from 'vue'
import App from './App'
import myFooter from "./component/footer"
import router from "./router/index"
Vue.config.productionTip = false
 
Vue.component("myFooter",myFooter)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

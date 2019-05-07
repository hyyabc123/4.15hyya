import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import "../node_modules/swiper/dist/css/swiper.min.css"
import Vuelazyload from "vue-lazyload"

Vue.use(Vuelazyload,{
  loading:require("./image/timg.gif")
})

Vue.config.productionTip = false

Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

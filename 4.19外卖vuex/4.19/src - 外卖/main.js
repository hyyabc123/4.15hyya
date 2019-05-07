import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.filter('toThousandFilter', function(num){
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
});

Vue.filter('formatDate', function(value){
  let date = new Date();
  date.setTime(value);
  let year = date.getFullYear(),
      month = (date.getMonth() + 1).toString().padStart(2, '0'),
      day = date.getDate().toString().padStart(2, '0'),
      hour = date.getHours().toString().padStart(2, '0'),
      min = date.getMinutes().toString().padStart(2, '0'),
      sec = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

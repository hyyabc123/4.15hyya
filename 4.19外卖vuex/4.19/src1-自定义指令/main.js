import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

Vue.directive("img",{
  inserted(el,obj){
    let img = new Image()
   
    img.src=obj.value

    let color = Math.floor(Math.random()*1000000)
    el.style.background="#"+color
    img.onload=()=>{
      el.style.background="url("+ obj.value +")"
    }
  }
})

Vue.directive("fo",{
  inserted(el,obj){
    console.log(el,obj)
    el.style.width="100px";
    el.style.height="100px";
    el.focus()
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

<template>
  <div id="app">
    <div style="width:100px;height:100px;background:red" v-for="(item,index) in list" :key="index" v-img="item"></div>
    <input type="text" v-fo>
    <div v-big="data"></div>
  </div>
</template>

<script>


export default {
  directives:{
    big:{
      inserted(el,obj){
        el.style.width=obj.value.width
        el.style.height=obj.value.height
        el.style.background="red"
      }
    }
  },
  components: {

  },
  data(){
    return {
      list:[
        "http://img0.imgtn.bdimg.com/it/u=3967239004,1951414302&fm=26&gp=0.jpg",
        "http://t9.baidu.com/it/u=265726718,565835175&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=2d4787b9fe0effed9e861188b7493297"
      ],
      data:{
        width:"300px",
        height:"20px"
      }
    }
  },
  methods:{
    
  },
  computed:{
    
  },
  created(){  
    
  }
}
</script>

<style >

</style>

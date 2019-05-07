<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods:{
   
  },
  computed:{
    
  },
  data(){
    return {

    }
  }
}
</script>

<style>
   *{
     margin: 0;
     padding: 0;
     list-style: none;
     text-decoration: none;
     box-sizing: border-box;
   }
   html,body,#app{
     width: 100%;
     height: 100%;
   }
   #app>div{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
   }
   .main{
     flex: 1;
   }
   footer{
     width: 100%;
     height: 40px;
    display: flex;
    border-top: 1px solid #ccc;
   }
   footer a{ 
     flex: 1;
     line-height: 40px;
     text-align: center;
   }
</style>

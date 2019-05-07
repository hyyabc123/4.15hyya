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
     height: 44px;
    display: flex;
    border-top: 1px solid #ccc;
   }
   footer .item{ 
     flex: 1;
     /* line-height: 40px; */
     text-align: center;
     display: flex;
     flex-direction: column;
     color: #3C5B89;
   }
   footer .item a{
     flex: 1;
     text-align: center;
     color: #3C5B89;
   }
   footer .item span{
     margin-top: 2px;
     flex: 1;
   }
</style>

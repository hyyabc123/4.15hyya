<template>
  <div id="app">
    <div class="wrap">
      <!-- <div></div> -->
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      list:[
        {
          title:"",
          id:1
        },
        {
          title:"",
          id:2
        },
        {
          title:"",
          id:3
        }
      ]
    }
  }
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      text-decoration: none;
    }
  html,body,#app,.wrap,.main{
    width: 100%;
    height: 100%;
  }
  
  .main{
    display: flex;
    flex-direction: column;
  }
  .main_main{
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

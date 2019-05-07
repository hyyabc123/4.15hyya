<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
    }
    html,body,#app,.main_main{
      width: 100%;
      height: 100%;
    }
    
    .main_main{
      display: flex; 
      flex-direction: column;
    }
    .main_main .main{
      flex: 1;
    }
</style>

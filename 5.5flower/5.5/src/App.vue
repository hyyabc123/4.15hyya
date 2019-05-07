<template>
  <div id="app">
    <router-view/>
    <my-footer> </my-footer>
  </div>
</template>

<script>
import myFooter from "./components/footer"
export default {
  name: 'App',
  components:{
    myFooter
  },
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
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
.mian{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.box{
  flex: 1;
}
</style>

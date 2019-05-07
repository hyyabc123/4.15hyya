<template>
  <div id="app">
    <my-header class="header"></my-header>
    <my-content class="content" :list=list></my-content>
    <my-footer class="footer" @addname="fn"></my-footer>

  </div>
</template>

<script>
import myHeader from "./components/myheader" 
import myContent from "./components/mycontent"
import myFooter from "./components/myfooter"
export default {
  name: 'App',
  components: {
      myHeader,
      myContent,
      myFooter
  },
  data(){
    return{
      list:[]
    }
  },
  methods:{
    fn(val){
      this.list.push(val)
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  
}
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    .header{
      width: 100%;
      height: 40px;
      display: flex;
      span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .content{
      flex: 1;
      overflow: auto;
    }
    .footer{
      width: 100%;
      height: 40px;
      display: flex;
      input{
        flex: 4;
      }
      button{
        flex: 1;
      }
    }
  }
</style>

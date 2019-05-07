<template>
  <div id="app">
      <header>
        <span @click="componentId='myClass'">分类</span>
        <span @click="componentId='myHot'">品类</span>
      </header>
      <section>
        <component :is="componentId"></component>
      </section>
  </div>
</template>

<script>
import myClass from "./components/myclass"
import myHot from "./components/myhot"

export default {
  name: 'App',
  components: {
    myHot,
    myClass
  },
  data(){
    return {
      componentId:"myClass"
    }
  },
  created(){  

  }
}
</script>

<style>
    .active{
      color: red;
    }
    header{
      width: 100%;
      height: 40px;
      background: #ccc;;
      display: flex;
    }
    header span{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>

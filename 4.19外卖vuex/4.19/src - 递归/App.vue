<template>
  <div id="app">
    <my-list :list=list></my-list>
  </div>
</template>

<script>
import axios from "axios";
import myList from "./components/list"
export default {
  name: 'App',
  components: {
    myList
  },
  data(){
    return {
      list:[]
    }
  },
  created(){
    axios.get("/api/index").then((res)=>{
      this.list=res.data
    })
    
  }
}
</script>

<style>
  
</style>

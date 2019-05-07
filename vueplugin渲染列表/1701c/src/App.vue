<template>
  <div id="app">
    <my-list v-for="(item,index) in data1" :img=item.contentFirstImg :tit=item.smallTitle :time=item.publishTime :key="index"></my-list>
  </div>
</template>

<script>
import myList from "./components/list";
import axios from "axios";

export default {
  name: "App",
  components: {
    myList
  },
  data() {
    return {
      data1:""
    };
  },
  methods: {

  },
  created() {
    axios.get("/api/index").then(res => {
      this.data1 = res.data.data
      // console.log(this)
      console.log(this.data1);
    });
    
  }
};
</script>

<style>
</style>

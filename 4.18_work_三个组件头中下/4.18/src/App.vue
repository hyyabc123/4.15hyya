<template>
  <div id="app">
    <heade class="heade"></heade>
    <mai class="mai"></mai>
    <foo class="foo"></foo>
  </div>
</template>

<script>
import heade from "./components/head.vue"
import mai from "./components/main.vue"
import foo from "./components/footer.vue"
export default {
  name: 'App',
  data(){
    return {
      // hot:"419大酬宾"
    }
    
  },
  components: {
    heade,
    foo,
    mai
  }
}
</script>

<style  lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
  body,html{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .heade,.foo{
      width: 100%;
      height: 50px;
    }
    .mai{
      flex: 1;
      overflow: auto;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      dl{
        flex:0 0 auto;
        padding: 10px;
      }
    }
  }
</style>



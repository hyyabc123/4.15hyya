<template>
  <div id="app">
    <div class="wrap">
      <myMask v-if="flag1" :buylist=buylist></myMask>
      <section> 
        <div class="left">
            <li v-for="(item,index) in conlistdata" :key="index" @click="fn({ind:index,type:item.type})" :class="{'active':index==ind}">{{item.title}}</li>
        </div>
        <div class="right"> 
            <my-list class="lis" v-for="(item,index) in alldata1" 
            :id =item.id
            :title =item.title
            :count =item.count
            :price =item.price
            :type=item.type
            :index = index
            :key=index></my-list>
            <!-- <button @click="getdata1">点击</button> -->
        </div>
      </section>
      <footer class="footer" @click="dialog">
          总数：{{totalcount}}
          <!-- {{dat}} -->
          总价：{{totalprice}}
      </footer>
    </div>
    <my-mask></my-mask>
    <!-- <p>{{1555723688201 |toThousandFilter }}</p> -->

  </div>
</template>

<script>

import axios from "axios"
import myList from "./components/mylist"
import myMask from "./components/dialog"

import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
  name: 'App',
  components: {
    myList,
    myMask
  },
  data(){
    return {
     
    }
  },
  methods:{
    ...mapMutations(["fn","dialog"]),
    ...mapActions(["axiosgetdata"]),
   
  },
  computed:{
    ...mapState(["conlist","ind","alldata2","concon","buylist","flag1"]),
    ...mapGetters(["conlistdata","alldata1","totalprice","totalcount"]),
    classdata(){
      return 
    }
  },
  created(){ 
    console.log(this.alldata1)
    this.axiosgetdata()
  }
}
</script>

<style >
*{
  margin: 0;  
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.lis{
  margin-bottom: 10px ;
}
.active{
  color: red;
}

html,body{
  width: 100%;
  height: 100%;
}
.right{
  flex: 4;
}
.left{
  flex: 2;
  border-right: 1px solid #ccc;
}
.left li{
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
section{
  flex: 1;
  display: flex;
}
#app{
  width: 100%;
  height: 100%;
}
.footer{
  width: 100%;
  height: 40px;
  line-height: 40px;;
  border: 1xp solid #ccc;
  border-top: 1px solid #ccc;
}
</style>

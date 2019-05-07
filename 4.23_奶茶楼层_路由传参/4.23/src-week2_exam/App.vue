<template>
  <div id="app">
    <div class="wrap">
      <header class="header">
        <span v-for="(item,index) in tit" @click="fn(index,item.id)"   :key="index" :class="{'active':index==ind}">{{item.title}}</span>
      </header>
      <template v-if="list.length">
        <my-list  v-for="(item,index) in list" :title=item.title  :id=item.id :time = item.time :city = item.city :key=index></my-list>
      </template>
      <template v-else>
        <div>暂无数据</div>
      </template>
  

    </div>
  </div>
</template>

<script>

import Mock from "./mock/mock";
import myList from "./component/mylist"
console.log(Mock.list)
export default {
  name: 'App',
  components: {
    myList
  },
  methods:{
    getlist(list,id){
      return list.filter(item=>item.id==id)
    },
    fn(index,id){
      if(id==4){
        this.list=  Mock.list
      }else{
      this.list=this.getlist(Mock.list,id)
      console.log(id)
      }
      this.ind =index
    }
  },
  computed:{
    // list(){
    //   return this.getlist(Mock.list,1)
    // }
  },
  data(){
    return {
      ind:0,
      list:this.getlist(Mock.list,1),
      tit:[
        {
          title:"未开始",
          id:1
        },
        {
          title:"进行中",
          id:2
        },
        {
          title:"已放弃",
          id:3
        },
        {
          title:"全部",
          id:4
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
     text-decoration: none;
     box-sizing: border-box;
   }
    html,body{
      width: 100%;
      height:  100%;
    }
    .active{
      border-bottom: 1px solid red;
      color: red;
    }
    #app{
      width: 100%;
      height: 100%
    }
    .wrap{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .header{
      width: 100%;
      height: 40px;
       border-bottom: 1px solid #ccc;
      display: flex;
    }
    .header span{
      flex: 1;
      line-height: 40px;
      text-align: center;
    }
</style>

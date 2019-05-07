<template>
  <div id="app">
    <div class="wrap">
      <myMask v-if="flag1" :buylist=buylist></myMask>
      <section> 
        <div class="left">
            <li v-for="(item,index) in classlist" :key="index" @click="fn(index,item.type)" :class="{'active':index==ind}">{{item.title}}</li>
        </div>
        <div class="right"> 
            <my-list class="lis" v-for="(item,index) in conlist" 
            :id =item.id
            :title =item.title
            :count =item.count
            :price =item.price
            :type=item.type
            :index = index
            :key=index></my-list>
        </div>
      </section>
      <footer class="footer" @click="dialog">
          总数：{{totalcount}}
          总价：{{totalprice}}
      </footer>
    </div>

    <!-- <p>{{1555723688201 |toThousandFilter }}</p> -->

  </div>
</template>

<script>
import axios from "axios"
import myList from "./components/mylist"
import myMask from "./components/dialog"
export default {
  name: 'App',
  components: {
    myList,
    myMask
  },
  data(){
    return {
      classlist:[],
      conlist:[],
      ind:0,
      concon:null,
      // totalprice:null,
      buylist:[],
      flag1:false
    }
  },
  methods:{
    fn(ind,type){
      this.ind = ind;
      this.conlist= this.iniDate(this.concon,type)
    },
    iniDate(content,type){
        return content.filter(item=>{
          return item.type==type
        })
    },
    dialog(){
      this.flag1= !this.flag1
    }
  },
  computed:{
    totalprice(){
      return this.buylist.reduce((prev,next)=>{
        return  prev+next.count*next.price
      },0)
    },
    totalcount(){
      return this.buylist.reduce((prev,next)=>{
        return  prev+next.count
      },0)
    }
  },
  created(){  
    axios.get("/api/class").then((res1)=>{
      this.classlist = res1.data
      console.log(res1.data)
    }),
    axios.get("/api/con").then((res)=>{ 
      this.concon = res.data
      this.conlist = this.iniDate(res.data,res.data[0].type)
      // console.log( this.iniDate(res.data,res.data[0].type))
      console.log(res.data)
    })
    this.$bus.$on("addcount",(num,id,type)=>{
      this.concon.find(item=>item.id==id).count=num
      this.buylist.map((item,index)=>{
        if(item.count==0){
          
          this.buylist.splice(index,1)
        }
      })

      let index = this.conlist.findIndex(item=>item.id==id)
      
      this.conlist[index].count=num
      
      let flag = this.buylist.findIndex(item =>item == this.conlist[index])

      if(flag==-1){
        this.buylist.push(this.conlist[index])
      }
      this.buylist.map((item,index)=>{
        
        if(item.count==0){
          this.buylist.splice(index,1)
        }
      })
    })
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

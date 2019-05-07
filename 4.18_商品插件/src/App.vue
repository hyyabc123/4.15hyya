<template>
  <div id="app">
      <my-li :arr=arr>

         <template v-lot="tname" >
          <button>w de </button>
        </template>
        
      </my-li>
      
     
      <div>{{totalprice}}</div>
      
      <!-- <template v-slot="slotname1">
        <button>w de </button>
      </template> -->
      
  </div>
  
</template>

<script>
import myCount from "./components/count"
import myLi from "./components/li"
export default {
  name: 'App',
  components: {
      myCount,
      myLi
  },
  data(){
    return{
      arr:[
        {
          title:"苹果",
          price:"10",
          count:0,
          id:1
        },
        {
          title:"香蕉",
          price:"20",
          count:0,
          id:2
        }
      ],
      buylist:[]
    }
  },
  methods:{
   
  },
  created(){
    this.$bus.$on("addcount",(num,id)=>{
      let index=this.arr.findIndex(item=> item.id==id) 
      this.arr[index].count = num;
      if(this.buylist.findIndex(item=>item.id==id) ==-1){  
        this.buylist.push(this.arr[index])
      }
    })
  },
  computed:{
     totalprice(){
      return this.buylist.reduce((prev,next)=>{
        return prev + next.price*next.count
      },0)
    }
  }
}
</script>

<style lang="scss">

</style>

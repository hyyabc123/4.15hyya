<template>
  <div>
    <my-add></my-add>
      <my-addlist></my-addlist>
    <span  v-for="(item,index) in getdatagetters" :key="index" >
      <span v-if="item.completed" @dblclick="updata(item.id,item.title,item.completed,item.userId)" :style="{background:'red'}">{{item.title}}  <span @click="removelist(item.id)">删除</span>  </span>
      
      <span @dblclick="updata(item.id,item.title,item.completed,item.userId)" v-else  :style="{background:'orange'}">{{item.title}} <span @click="removelist(item.id)">删除</span></span>
      </span>
  </div>
</template>
<script>
import { mapActions ,mapGetters} from "vuex";
import myAddlist from "./components/addlist"
import myAdd from "./components/add"
export default {
  props:{

  },
  components:{
    myAddlist,
    myAdd
  },
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(["getdatagetters"])
  },
  methods:{
    ...mapActions(["axiosgetdata","removelist","updatalits"]),
    updata(id,title,completed,userId){
      let obj={
        id:id,
        userId:userId,
        completed:!completed,
        title,
      }
      // console.log(obj)
      
      this.updatalits(obj)
    }
  },
  created(){
    this.axiosgetdata()
  },
  mounted(){

  }
}
</script>
<style scoped lang="">
span{
  /* background: red;/ */
  margin: 10px 20px;
  display: inline-block;

}
</style>
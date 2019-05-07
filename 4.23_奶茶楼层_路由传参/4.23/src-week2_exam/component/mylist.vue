<template>
    <div class="main">
        <li>{{title}}</li>
        <li>{{time}}</li>
        <li>{{city}}</li>
        <li>{{ff}}</li>

    </div>
</template>
<script>
export default {
    props:["time","title","city","id"],
    components:{

    },
    data(){
        return {
            msg:null 
        }
    },
    computed:{
        ff(){
            if(this.id==1){
              return   this.msg = "未开始"
            }else if(this.id==2){
              return  this.msg = "进行中"
            }else if(this.id==3){
               return this.msg = "已放弃"
            }else if(this.id==4){
               return this.msg = "全部"
            }
        }
    },
    methods:{
        
    },
    created(){
        // console.log(this.id)
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.main{
    width: 90%;
    height: 90px;
    background: #ccc;
    margin: 10px;
    padding: 10px;
}
</style>
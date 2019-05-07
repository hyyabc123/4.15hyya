<template>
    <div class="main">
        <div class="main_main">
            <div class="head">
                <span class="iconfont icon-wode"></span>
                <span></span>
                <span @click="change(item.id)" v-for="(item,index) in getlist" :key=index>{{item.title}}</span>
                <span></span>
                <span class="iconfont icon-fangdajing"></span>
            </div>
            <div class="box">
                <router-view></router-view>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import "../fonts/iconfont.css"
import {mapGetters,mapMutations} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getlist'])
    },
    methods:{
        change(id){
            if(id==1){
                this.$router.push({name:'give'})
            }else if(id==2){
                this.$router.push({name:'city'})
            }
            
        }
    },
    created(){

    },
    mounted(){

    },
}
</script>
<style scoped lang="">
    .head{
        width: 100%;
        height: 40px;
        text-align: center;
        margin: 20px 0;
        line-height: 40px;;
        display: flex;
    }
    .head span{
        flex: 1
    }
    .box{
        flex: 1;
        overflow: hidden;
    }
</style>
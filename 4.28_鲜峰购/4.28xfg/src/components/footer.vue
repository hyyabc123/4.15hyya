<template>
    <footer class="footer">
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/classvue">分类</router-link>
        <router-link tag="li" class="shopp" to="/shopvue">
            购物车
            <span class="poa">
                {{totalcount}}
            </span>
        </router-link>
        <router-link tag="li" to="/myvue">我的</router-link>
    </footer>
</template>
<script>
import {mapMutations,mapGetters} from "vuex"
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
        ...mapGetters(["totalcount"])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    footer{
        width: 100%;
        height: 40px;
        background: #ccc;
        float: left;
    }
    footer li{
        width: 24%;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        position: relative;
    }
    .poa{
        width: 30px;
        height: 30px;
        background: red;
        position: absolute;
        border-radius: 50%;
        top: -17px;
        left: 55px;
        color: white;
    }
</style>
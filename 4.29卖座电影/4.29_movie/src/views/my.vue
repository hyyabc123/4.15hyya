<template>
    <div class="main">
        <div class="main_main">
            <div class="head">
                <span >立即登录</span>
            </div>
            <li class="leftright">
                <div class="item">
                    <span class="iconfont icon-wode"></span>
                    <span @click="login">电影订单</span>
                </div>
                <div class="item">
                    <span class="iconfont icon-wode"></span>
                    <span>商品订单</span>
                </div>
            </li>
            <div class="lis">
                <li>
                    <span class="iconfont icon-wode"></span>
                    <b>卖座卡</b>
                    <span class="iconfont icon-wode"></span>
                </li>
                <li>
                    <span class="iconfont icon-wode"></span>
                    <b>组合红包</b>
                    <span class="iconfont icon-wode"></span>
                </li>
                <li>
                    <span class="iconfont icon-wode"></span>
                    <b>余额</b>
                    <span class="iconfont icon-wode"></span>
                </li>
                <li>
                    <span class="iconfont icon-wode"></span>
                    <b>设置</b>
                    <span class="iconfont icon-wode"></span>
                </li>
            </div>
        </div>  
        <my-footer></my-footer>
    </div>
</template>
<script>
import  "../fonts/iconfont.css"
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

    },
    methods:{
        login(){
            this.$router.push({name:"titct"})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .head{
        width: 100%;
        height: 100px;
        background: #FF7D26;
        padding: 40px;
    }
    .head span{
        color: white;
    }
    .leftright{
        width: 100%;
        height: 50px;
        display: flex;
        border-bottom: 1px solid #eee;
    }
    .leftright .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .leftright .item span{
        flex: 1;
        flex-direction: column;
    }
    .lis{
        width: 100%;
        height: 300px;
        /* background: red; */
    }
    .lis li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        border-bottom: 1px solid #eee;
    }
    .lis li span{
        flex: 1;
        text-align: center;

    }
    .lis li b{
        flex: 5;
    }
</style>
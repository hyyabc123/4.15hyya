<template>
    <div class="footer">
        <router-link tag="li" to="/">
            <span class="iconfont icon-wode"></span>
            <span>电影</span>
        </router-link>
        <router-link tag="li" to="/movietick">
            <span class="iconfont icon-wode"></span>
            <span>影院</span>
        </router-link>
        <router-link tag="li" to="/chep">
            <span class="iconfont icon-wode"></span>
            <span>特惠</span>
        </router-link>
        <router-link tag="li" to="/my">
            <span class="iconfont icon-wode"></span>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
import "../fonts/iconfont.css"
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .footer{
        width: 100%;
        height: 40px;
        background: #ccc;
        display: flex;
    }
    .footer li{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .footer li span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
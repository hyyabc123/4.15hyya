<template>
        <footer class="footer">
            <div class="item">
                <span class="iconfont icon-shouye"></span>
                <router-link to="/">首页</router-link>
            </div>
            <div class="item">
                <span class="iconfont icon-wode"></span>
                <router-link to="/discover">菜单</router-link>
            </div>
            <div class="item">
                <span class="iconfont icon-wode"></span>
                <router-link to="/profile">订单</router-link>
            </div>
            <div class="item">
                <span class="iconfont icon-gouwuche"></span>
                <router-link to="/order">购物车</router-link>
            </div>
            <div class="item">
                <span class="iconfont icon-wode"></span>
                <router-link to="/order">我的</router-link>
            </div>           
        </footer>
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

</style>
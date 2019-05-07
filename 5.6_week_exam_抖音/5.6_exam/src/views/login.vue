<template>
    <div class="login">
        <h2>登录页面</h2>
        <button @click="loginFn()" class="btn">一键登录</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
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
        ...mapState(['flag'])
    },
    methods:{
        loginFn(){
            document.cookie='login=已登录'

            let time1 = 7 * 24 * 60 * 60 * 1000  //  七天的时间戳
            setTimeout(()=>{
                document.cookie=''
            },time1)
            
            this.$router.push({path:'/'})
        }
    },
    created(){

    },
    mounted(){
        
    }
}
</script>
<style scoped lang="">
    .login{
        width: 100%;
        height: 100%;
        padding: 130px;
    }
    .btn{
        width: 70px;
        height: 40px;
        outline: 0;
        border: 0;
        background: orange;
    }
</style>
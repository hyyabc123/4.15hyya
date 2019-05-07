<template>
    <div>
        <p><input type="text" placeholder="请输入用户名" v-model="userId"></p>
        <p><input type="password" placeholder="请输入密码" v-model="pwd"></p>
        <button @click="login()">登录</button>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            userId:"",
            pwd:""
        }
    },
    computed:{

    },
    methods:{
        login(){
            this.$http.post("/api/login",{userId:this.userId,pwd:this.pwd}).then((res)=>{
                if(res.data.code==1){
                    window.localStorage.setItem("userId","asdasd")
                    this.$router.go(-1)
                }else{
                    alert("请输入正确的用户名密码")
                }
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
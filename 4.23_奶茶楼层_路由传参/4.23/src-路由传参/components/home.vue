<template>
    <div class="main">
        首页
        <!-- <router-link to="/search">去搜索了</router-link> -->
        <!-- <p @click="fn">去搜索了</p> -->
        <div class="main_main">
            <li v-for="(item,index) in list"
             :key="index" 
             @click="fn(item.id)"
            >
                {{item.title}}
            </li>
        </div>
        
        <my-footer></my-footer>
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
            list:[
                {
                    title:"汉堡",
                    id:1
                },
                {
                    title:"炸鸡",
                    id:2
                },
                {
                    title:"地方菜",
                    id:3
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        fn(id){
            // this.$router.push("search") 
            // this.$router.push({path:"/search"})
            // this.$router.push({name:"search"})
            // this.$router.push({name:"search",query:{count:10}})
            // this.$router.push({name:"search",query:{count:100}})
            // this.$router.replace({name:"search",query:{count:100}})
            // this.$router.push({name:"search",params:{count:100}})
            // this.$router.replace({name:"search",params:{count:100}})
            this.$router.push({name:"shop",params:{id:id}})
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
<template>
    <div>
        <div class="main">
            首页
            <li v-for="(item,index) in list" @click="fn(item.id)" :key= index>{{item.title}}</li>
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
                   title:"素食类",
                   id:1
                },
                {
                   title:"家常菜",
                   id:2
                },
                {
                   title:"早餐类",
                   id:3
                }

            ]
        }
    },
    computed:{

    },
    methods:{
        fn(id){
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
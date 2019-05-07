<template>
    <div v-if="list">
        <div class="img">
            <img :src="list.poster" alt="">
        </div>
        <h3>{{list.name}}</h3>
        <p>{{list.category}}</p>
        <p>{{list.nation}}{{list.runtime}}</p>
        <p>{{list.synopsis}}</p>
    </div>
    <div v-else>
        "亲无对应信息哦"
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:null
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        Axios.get("/api/list?id="+this.$route.params.id).then((res)=>{
            this.list = res.data.data.film
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .img{
        width: 100%;
        height: 200px
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    h3{
        margin: 20px 0;
        padding-left: 20px;
    }
    p{
        margin: 20px 0;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
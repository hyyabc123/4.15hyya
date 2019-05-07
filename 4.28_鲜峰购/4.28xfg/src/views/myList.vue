<template>
    <dl class="dl1">
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <li>{{title}}</li>
            <p>{{title}}</p>
            <li class="price"><span>￥{{price}}</span><span></span><span></span><span></span><span></span><span @click="add(id)" class="iconfont gouwu icon-gouwuche"></span></li>
        </dd>
    </dl>
</template>
<script>
import "../fonts/iconfont.css"
import {mapMutations,mapGetters} from "vuex"
export default {
    props:["title","price","img","id"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        
    },
    methods:{
        ...mapMutations(["add"])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.gouwu{
    background: #FED703;
    border-radius: 10px;
}
</style>
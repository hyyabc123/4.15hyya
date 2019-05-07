<template>
    <div class="hheader">
        <li class="li1">
            <span class="iconfont icon-dizhi-01"></span>    
            <span>自动定位</span>
            <span class="changeo"></span>
            <span>切换</span>
        </li>
        <div class="box3">
            <dl class="item" v-for='(item,index) in datalistGetters' :key=index>
                <dd>
                    <img :src="item.img" alt="">
                </dd>
                <dt>
                    {{item.title}}
                </dt>
            </dl>
        </div>
        <div class="bannerbox">
            <img src="../../static/images/4.jpg" alt="">
        </div>
        <div class="box2">
            <img src="../../static/images/5.jpg" alt="">
        </div>
    </div>
</template>
<script>
// datalistGetters
import {mapGetters} from "vuex"
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
        ...mapGetters(['datalistGetters'])
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
.li1{
    display: flex;
    width: 100%;
    height: 30px;

}
.li1 span{
    flex: 1;
    text-align: center;
}
.li1 .changeo{
    flex: 2;
    
}
.hheader{
    width: 100%;
    height: auto;
    background: #161823;
    color: #85868B;
}
.box3{
    width: 100%;
    height: 80px;
    display: flex;  
}
.box3 dl{
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    text-align: center;
}
.bannerbox{
    text-align: center;
    margin-top: 10px;
}
.box2{
    text-align: center;
}

</style>
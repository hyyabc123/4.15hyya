<template>
    <div>
        <div class="mask">
            <div class="cont">
                <li v-for="(item,index) in buylist" :key=index>
                    <span>{{item.title}}</span>
                    <my-count class="cou" :count=item.count :type=item.type :index=item.index :id=item.id></my-count> 
                </li>
            </div>
            
        </div>
    </div>
</template>
<script>
import myCount from "./count"
export default {
    props:{
        buylist:{

        }
    },
    components:{
        myCount
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
    .mask{
        position: fixed;
        width: 100%;
        height: 92%;
        background: rgba(0,0,0,.5);
    }
    .cont{
        position: absolute;
        width: 100%;
        height: 250px;
        background: white;
        bottom: 0;;
    }
    li{
        margin:  10px 0;
        display: flex;
        padding: 0 10px;
        
    }
    span{
        flex: 1;        
    }
    .cuo{
        flex: 1;
    }
</style>
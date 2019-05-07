<template>
    <div>
        <h2>{{Subject}}</h2>   
        <div class="main1">
            <dl @click="fn(item.Label,Subject)" :class="[{'border':Layout=='border'}]" v-for="(item,index) in Content" :key =index>
                <dt>
                    <img :src="item.Icon" alt="">
                </dt>
                <dd>        
                    <p>{{item.Label}}</p>
                </dd>
            </dl>
        </div> 
    </div>
</template>
<script>
import {mapMutations,mapGetters} from "vuex"
export default {
    props:["Subject","Content","Layout"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapMutations(['getlist']),
        fn(Label,Subject){
            console.log(Label,Subject)
            let obj = {
                Subject,
                Label
            }
            console.log(obj)
            this.getlist(obj)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

}
.main1{
    display: flex;
    flex-wrap: wrap;
}
.main1>dl{
    width: 33.3%;
    /* height: 140px; */
    /* background: red; */
}   
.main1>dl dt{
    width: 100%;
    height: 80%;
}
.main1>dl dt img{
    width: 100%;
    height: 100%
}
.main1>dl dd{
    display: flex;
    justify-content: center;
    align-items: center;
}
.border{    
    border: 1px solid #ccc;
    display: flex;
    flex-direction: row;
}
.border dt{
    flex: 0.2;
}
.border dd{
    flex: 1;
}
</style>
<template>
    <div class="main">
        <header>

        </header>
        <dl>
            <li>
                <span :class="{'active2':index<=ind1}" v-for="(item,index) in headlistGetter" ref="sp" :key=index>{{item.title}}
                    <span v-if="item.flag==0">x</span>
                    <span v-else-if="item.flag==1">v</span>
                </span>
            </li>

            <dd>{{listGetter(ind).title}}</dd>
            <dt @click="choose(item1.id,index)" :class="{'active':index==ind2}" v-for='(item1,index) in listGetter(ind).answer' :key =index>{{item1.choose}}</dt>
            <button @click="next">下一题</button>
        </dl>
        <footer>

        </footer>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            trueAnswer:[],
            count:0,
            ind:0,        
            ind1:0,
            ind2:null,
            obj:{}
        }
    },
    computed:{
        ...mapGetters(['listGetter','headlistGetter'])
    },
    methods:{
        ...mapMutations(['change']),
        choose(id,index){
            this.ind2= index
            if(this.trueAnswer.length<=this.ind1){
                this.trueAnswer.push(id)
            }else{
                this.trueAnswer.splice(this.ind1,1,id)
            }
        },
        next(){
            if(this.trueAnswer.length == this.ind1+1){
                if(this.ind1>=4 && this.trueAnswer.length>=5){    
                    this.$router.push({name:"detail", params:{arr:this.trueAnswer,ind:this.ind1}})    
                    return
                }else{
                    this.ind++
                    this.ind1++
                    this.ind2 =null
                    if(this.listGetter(this.ind1-1).true==this.trueAnswer[this.ind1-1]){
                        this.change({index:this.ind1-1,num:1})
                    }else{
                        this.change({index:this.ind1-1,num:0})
                    }
                }    
            }else{
                alert("选择后在做下一题哦")
            }
            // console.log(this.trueAnswer.length)
            // console.log()
            
        }
    },
    created(){

    },  
    mounted(){

    }
}
</script>
<style scoped lang="">
    .active2{
        background: red;
    }
    li{
        margin: 20px 0;
        display: flex;
    }
    li>span{
        flex: 1;
        text-align: center;
        background: #ccc;
        border-radius: 20px;
    }
    .active{
        color:orange
    }
    .main{
        width: 100%;
        height: 100%;
        background: #CD141C;
        display: flex;
        flex-direction: column;
    }
    dl{
        background: url("../../static/images/9.png");
        background-size: 100% 100%;
        flex: 1;
        padding: 100px 90px;
    }
    header{
        background:url("../../static/images/2.png");
        background-size: 100% 100%;
        width: 100%;
        height: 100px;
    }
    button{
        display: inline-block;
        margin-top: 60px;
        background: orange;
        border: 0;
        outline: 0;
    }
    footer{
        background:url("../../static/images/1.png");
         background-size: 100% 100%;
        width: 100%;
        height: 100px;
    }
</style>
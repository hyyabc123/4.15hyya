<template>
    <div class="main_main">
        <div class="left">
            <ul class="mleft">
                <li :class="{'active':index==ind}" @click="add(index)" v-for="(item,index) in listdata" :key=index>{{item.name}}  </li>
            </ul>
        </div>
        <div class="right">
            <div class="mright" ref="mright">



                <my-list v-for="(item,index) in listdata" :name=item.name :foods = item.foods :key=index></my-list>


            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import myList from "../view/mylist"
import BScroll from "better-scroll"
export default {
    name:"diancan",
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            listdata:[],
            rightScroll:null,
            leftScroll:null,
            ind:0,
            list:[],
            scrollY:null
        }
    },
    computed:{
        change(){
                for(let j = 0;j<this.list.length;j++){  

                    if(this.list[j]<this.scrollY && this.list[j+1]>this.scrollY ){
                        // this.ind=j
                        return j
                    }
                    
                }
                return 0
        }
    },
    methods:{
        add(index){
            this.ind=index;
            this.rightScroll.scrollToElement(this.$refs.mright.children[this.ind],400);
        },
        init(){
            this.rightScroll=new BScroll(".right",{
                probeType:3
            })
            this.leftScroll= new BScroll(".left",{
                click:true
            })
            this.rightScroll.on("scroll",(res)=>{
                this.scrollY= Math.abs(res.y)
                this.ind = this.change
            })
        },
        geteltop(){        
            let arr1 = Array.from(this.$refs.mright.children)
            let item = 0 
            this.list.push(item)
            for(let i=0;i<arr1.length;i++){
                // this.list.push(arr1[i].offsetTop-40)
                item += arr1[i].offsetHeight
                this.list.push(item)
            }   
    // console.log(this)
        }   
    },
    created(){
        axios.get("/api/index").then((res)=>{
            console.log(res.data.goods)
            this.listdata= res.data.goods
            this.$nextTick(()=>{
                this.init()
                this.geteltop()
            })            
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../css/_mixin.scss";
    @import "../css/common.scss";
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    .main_main{
        @include fn(100%,100%);
        display: flex;
        .left{
            @include fn(130px,100%);    
            ul{
                @include fn; 
                li{
                    @include fn(100%,40px);
                    line-height: 40px;
                    text-align: center;
                    background: #ccc;;
                    margin-bottom: 10px;
                }
                .active{
                    background: orange;
                }
            }
        }
        .right{
            flex: 1;        
            overflow: hidden;
        }
        
    }
    
</style>
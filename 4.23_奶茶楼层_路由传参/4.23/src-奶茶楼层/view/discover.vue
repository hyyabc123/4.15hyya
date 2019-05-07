<template>
    <div>
        <div class="main">
            <header class="header">
                <span class="iconfont icon-dizhi-01"></span>
                <div class="search">
                    <b>康得大厦</b>
                    <span>距您462m</span>
                </div>
                <div class="zero"></div>
                <div class="self">
                    <div class="s1">
                        <div class="self1">
                            自提
                        </div>
                        <div class="out">
                            外卖
                        </div>
                    </div>
                    
                </div>
            </header> 
            <div class="banner">
                <img src="../images/5.jpg" alt="">
            </div>
            <div class="con">
                <div class="left">
                    <li v-for="(item,index) in list " :class="{'active':index==ind}" :key=index @click="fn(index)">{{item.name}}</li>
                </div>
                <div class="right">
                    <div class="rig" ref="rig">
                        <my-dl v-for="(item,index) in list"   :name1=item.name :foods=item.foods :key=index></my-dl>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import "../fonts/iconfont.css"
import dat from "../mock/shop.json"
import myDl from "../view/milk.vue"
import BScroll from "better-scroll"
export default {
    props:{

    },
    components:{
        myDl
    },
    data(){
        return {
            list:[],
            ind:0,
            foods:[],
            rightscroll:null,
            leftscroll:null
        }
    },
    computed:{
        
    },
    methods:{
        fn(index){
            this.ind = index;
            this.rightscroll.scrollToElement(this.$refs.rig.children[index],400)
        },
        // getlist(list,index){
        //     return list.filter((item,index)=>index)
        // }
    },
    created(){
        console.log(dat.goods)
        this.list=dat.goods
        console.log(BScroll)
        this.$nextTick(()=>{
           this.rightscroll= new BScroll(".right",{
                
            })
           this.leftscroll = new BScroll(".left",{
                click:true
            })
        })
        
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .main{
        display: flex;
        flex-direction: column;
        header{
            width: 100%;
            height: 60px;
            // background: red;
            display: flex;
            .iconfont{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .search{
                flex: 3;
                display: flex;
                flex-direction:column;
                b{
                    flex: 1;
                    display: flex;
                    // justify-content: center;
                    align-items: center;
                }
                span{
                    flex: 1;
                    font-size: 12px;
                    color: #ccc;
                }
            }
            .zero{
                flex: 4;
            }
            .self{
                flex: 2;
                display: flex;
                // background: blue;
                
                padding: 14px;
                .s1{
                    width: 100%;
                    height: 100%;
                    // background: orange;
                    border-radius: 15px;
                    display: flex;
                    border: 1px solid #7CA7D2;
                    .self1{
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 20px;
                        background: #7CA7D2;
                    }
                    .out{
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                
            }
        }
        .banner{
            width: 100%;
            height: 120px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .con{
            flex: 1;
            display:flex;
            .left{
                
                width: 100px;
                height: 100%;
                // background: red;
                li{
                    width: 100%;
                    height: 40px;
                    border-bottom: 1px solid #ccc;
                    text-align: center;
                    line-height: 40px;
                }
                .active{
                    background: orange;
                }
            }
            .right{
                flex: 1;
                overflow: hidden;
                // .con1{
                //     width: 100%;
                //     // background: red;
                // }
            }
        }
    }
   
    
</style>
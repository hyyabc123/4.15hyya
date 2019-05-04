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
            <p>分数{{price}}</p>
            <li class="li1">您一共做对了{{num}}道题</li>
            <button @click="conti" class="continiu">
                继续答题
            </button>
        </dl>
        <footer>

        </footer>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            trueArr:[1,6,11,15,19],
            answerArr:[],
            num:0,
            ind1:0,
        }
    },
    computed:{
        price(){
            return  this.num*20
        },
        ...mapGetters(['headlistGetter'])
    },
    methods:{
        conti(){
            this.$router.push({name:"home"})
            window.location.reload()
        }
    },
    created(){
        let that=this
        this.answerArr = this.$route.params.arr
        this.ind1=this.$route.params.ind
        console.log(this.answerArr)
        this.answerArr.forEach((item,index)=>{
            if(this.trueArr.includes(item)){
                that.num++
            }
        })
        console.log(that.num)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.li1{
    font-size: 20px;
    font-weight: bold;
}
p{
    margin: 20px 0;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
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
    .continiu{
        display: block;
        margin-top: 60px;
        background: orange;
        border: 0;
        outline: 0;
        margin: 50px auto;
        width: 100px;
        height: 40px;
        border-radius: 40px;
        color: white;

    }
    footer{
        background:url("../../static/images/1.png");
         background-size: 100% 100%;
        width: 100%;
        height: 100px;
    }
</style>
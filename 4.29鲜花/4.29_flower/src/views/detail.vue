<template>
    <div>
        <header class="header">
            <span @click="$router.go(-1)"><</span>
            <span>{{title}}</span>
        </header>
        <div class="box1">
            <span>综合</span>
            <span @click="sortfn('sales')">销量</span>
            <span @click="sortfn('price')">价格</span>
            <span>最新</span>
        </div>
        <div class="box">
            <my-list v-for="(item,index) in list" 
            :Image=item.Image
            :Introduction=item.Introduction
            :Price=item.Price
            :Sales=item.Sales
            :NowPromo=item.NowPromo
            :key=index></my-list>
        </div>
    </div>
</template>
<script>
import myList from "./mylist"
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            title:"",
            list:[]
        }
    },
    computed:{

    },
    methods:{   
        sortfn(arg){
            if(arg=="sales"){
                this.list.sort((a,b)=>{
                    let aSales = a.Sales.includes("万") ? a.Sales.slice(0,a.Sales.length-1)*10000 : a.Sales
                    let bSales = b.Sales.includes("万") ? b.Sales.slice(0,b.Sales.length-1)*10000 : b.Sales
                    if(aSales>bSales){
                        return 1
                    }else if(aSales<bSales){
                        return -1
                    }
                    return 0
                })

            }else if(arg=="price"){
                this.list.sort((a,b)=>{
                    if(a.Price>b.Price){
                        return 1
                    }else if(a.Price<b.Price){
                        return -1
                    }
                    return 0
                })
            }
        }
    },
    created(){
        this.$http.get("/api/list").then((res)=>{
            this.title= res.data.Datas.FlowerListBanners.Title
            this.list=res.data.Datas.FlowerList
            console.log(this.list)
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.header{
    width: 100%;
    height: 30px;
    display: flex;
    margin-bottom: 20px;
}
span{
    flex: 1;
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
}
</style>
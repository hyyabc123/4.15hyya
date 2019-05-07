<template>
    <div class="wrap">
        <h2>{{Subject}}</h2>
        <div class="wrap_wrap">
            <dl @click="fn1(Subject,item)" :class="[{'dl':Layout=='default'},{'dl1':Layout=='border'}]" v-for='(item,index) in Content' :key=index>
                <dt>
                    <img :src="item.Icon" alt="">
                </dt>
                <dd>
                    <li>{{item.Label}}</li>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    props:['Subject','Content','Layout'],
    components:{

    },
    data(){
        return {
            arr:[]
        }
    },
    computed:{

    },
    methods:{
        fn1(Subject,item){
            
            let obj ={}
            obj.Subject=Subject
            obj.Label = item.Label
            console.log(obj)
             console.log(this.arr)
            this.arr.forEach((item,index)=>{
                console.log(Subject)
                if(item.Subject!=Subject){
                    this.arr.push(obj)
                }else{
                    this.arr.replace(index,1,item)
                     console.log(this.arr)
                }   
            })
            // console.log(Subject)
            
            
           
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.wrap_wrap{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
}
.wrap .dl{
    width: 33%;
    height: 200px;
}
.wrap .dl dt{
    text-align: center;
}
.wrap .dl dd{
    text-align: center;
}
.dl1{
    width: 33%;
    height: 50px;
    display: flex;
    padding:0 20px ;
    border: 1px solid #ccc;
    justify-content: center;
    align-items: center;
}
</style>
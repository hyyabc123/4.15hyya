<template>
    <div>
        <p @click.self="$emit('addcount',count)" :style="styles">
        {{msg}}
        {{count}}
        </p>
        <img :style="style1" v-for="(item,index) in arr" :src="item" alt=""  :key="index">
        <button @click.self="$emit('abc',count)">add</button>
    </div>
</template>
<script>
export default {
    // props:["msg","count"],
    props:{
        msg:{
            type:String,
            default:"我是默认", 
            required:true
        },
        count:{
            type:Number,
            default:30,
            validator(val){
                return val>20
            }
        },
        styles:{
            type:Object,
        },
        arr:{
            type:Array,
            required:true,
            default(){
                return [
                    "http://img4.imgtn.bdimg.com/it/u=1447299376,2290556778&fm=26&gp=0.jpg",
                    "http://img4.imgtn.bdimg.com/it/u=2146046871,2611785107&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg"
                ]
            }
        },
        style1:{
            type:Object,
        }
    },
    data(){
        return {
            // msg:"12361238768",
            // count:0
        }
    },
    methods:{
        // fn(){
        //     this.count++
        // }
    }
}
</script>


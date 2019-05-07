<template>
    
    <div>   
        <list :msg=msg :count=count :arr=arr :style1=style1 :styles=styles @addcount=fn @abc="fn"></list>        
    </div>
</template>
<script>
import list from "./components/list.vue"
export default {
    data(){
        return {
            msg:"asjkdhkjasas",
            count:21,
            styles:{
                width:"200px",
                height:"200px",
                background:"red"
            },
            arr:[
                "http://img3.imgtn.bdimg.com/it/u=1752243568,253651337&fm=26&gp=0.jpg",
                "http://img2.imgtn.bdimg.com/it/u=1888333013,2441326225&fm=26&gp=0.jpg",
                "http://img4.imgtn.bdimg.com/it/u=2146046871,2611785107&fm=26&gp=0.jpg"
            ],
            style1:{
                width:"200px",
                height:"200px"
            }   
        }
    },
    methods:{
        fn(){
            this.count++
        }
    },
    components:{
        list
    }
}
</script>


<template>
    <div>
        <span class="iconfont icon-gengduo"></span>
        <div class="inp">
            <div class="inn">
                <input type="text" :placeholder="hot">      
            </div>
            
        </div>
        
        <span class="login">登录</span>
    </div>
</template>
<script>
export default {
    // props:["hot",]
    props:{
        hot:{
            // type:String,
            default:"418大减价"
        }
    },
    data(){
        return{
            // hot:"sd"
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../fonts/iconfont.css";
    @import "../scss/_mixin.scss";
    @import "../scss/common.scss";
    div{
        width: 100%;
        height: 100%;
        display: flex;  
        background: #EB2D2D;
        .iconfont{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }
        .inp{
            flex: 4;
            // border: 1px solid #ccc; 
            // border-radius: 20px;
            padding: 12px 10px;
            .inn{
                width: 80%;
                height: 98%;
                border: 1px solid #ccc;
                padding: 0 10px;
                border-radius: 20px;
                input::placeholder{
                    color: white;
                    font-size: 14px;
                }
            }
            // margin: 5px 0;
            
        }
        .login{
            color: white;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>



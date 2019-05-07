<template>
    <div class= "foo">
        <div class="item">
            <span class="iconfont icon-shouye"></span>
            <span class="ti">首页</span>
        </div>
        <div class="item">
            <span class="iconfont icon-shouye"></span>
            <span class="ti">首页</span>
        </div>
        <div class="item">
            <span class="iconfont icon-shouye"></span>
            <span class="ti">首页</span>
        </div>
        <div class="item">
            <span class="iconfont icon-shouye"></span>
            <span class="ti">首页</span>
        </div>
        <div class="item">
            <span class="iconfont icon-shouye"></span>
            <span class="ti">首页</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    @import "../fonts/iconfont.css";
    @import "../scss/_mixin.scss";
    @import "../scss/common.scss";
    .foo{
        width: 100%;
        height: 100%;
        display: flex;
        .item{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .iconfont{
                flex: 1;
            }
            .ti{
                flex: 1;
            }
        }
    }
</style>


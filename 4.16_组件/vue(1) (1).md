#### 一、vue是什么?

中文官网：https://cn.vuejs.org/

**Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。**

>什么是渐进式?

就是在核心功能的基础上，不断添加，vue的核心功能非常简单（单一），只专注于**视图层**。

但它非常容易扩展，vue加上其他工具就可以组合起来，做更加强大的功能。

>vue的生态：vue + vue-router + vuex + webpack

```
vue：vue的核心库，提供最基础的功能最单一的功能

核心库只关注视图层（把数据渲染到页面上面）

vue-router：路由

vuex：状态管理

webpack：模块打包器
```

>vue的特点：

**1>MVVM**

```
MVVM是一种思想，vuejs实现了这种思想。
    
M:数据模型   -------    数据层

V:视图       -------    视图层

VM:数据双向绑定
```

<html>
<!--在这里插入内容-->

如下图：

<img src="https://note.youdao.com/yws/public/resource/477940392129033151a1ace2e85a8264/xmlnote/08E8E86BE7B146449ECA921EED0ADF2F/7266" width="400px"/>
</html>

**总上所述：数据变化更新视图，视图变化更新数据**


<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/477940392129033151a1ace2e85a8264/xmlnote/E0A3D425833E44AC83AEDA339AF04C14/7329" width="600px"/>
</html>



**2>组件化**

把一个页面当中的html标签，按一定的语义或者是逻辑，人为地分成几个组成部分---组件。把一个大页面，拆分成几个小部分，然后这个小部分可以重用。

**3>模块化：**

把一个文件看作一个模块，该文件本身就是对某个组件的描述

>vscode配置

**vscode 支持.vue的语法需要安装 vetur 插件**

>数组的变异：

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/477940392129033151a1ace2e85a8264/xmlnote/FE58AEE9855D4A539CB48056839D9807/7364" width="500px"/>
<h6>解决办法：</h6>
<img src="https://note.youdao.com/yws/public/resource/477940392129033151a1ace2e85a8264/xmlnote/B5C960069AD34FF6B0EB882A744036A4/7366"/>
</html>

#### 二、指令：在vue中以标签的属性出现的类似于自定义属性，vue规定指令的格式v-mm，可以实现一些特定的功能（绑定数据）。

>指令：

```
1>数据绑定指令：v-html v-text v-model(实现数据双向绑定)

2>条件指令：v-if v-else-if v-else v-show 

3>循环指令：v-for 

4>属性绑定指令：v-bind:  例:v-bind:src  简写成 :src

5>事件绑定指令：v-on:事件名

v-pre  v-cloak  v-once
```

**注：v-bind在绑定value值时，数据可以驱动视图，视图不能驱动数据**

**v-model: 绑定的是表单的值，数据可以驱动视图，视图也可以驱动数据**

>事件修饰符：.stop .prevent .once .self 

>按键修饰符：.enter .tap .up .down .left .right .delete .esc .space

详情见vue官网

>计算属性：computed 该配置项是一个对象，对象中是函数。



#### 三、生命周期(钩子函数)   ：vue任意的组件都具有这样的周期，包括vue的实例

vue任意的组件都具有这样的周期，包括vue的实例

>实例的生命周期：我们在创建一个vue实例时，在构造器内部发生了一些事情

    第一个阶段：创建阶段 -----> 只执行一次

        细化为4个阶段

        第一个阶段：初始化事件，收集配置项

        beforeCreate

        第二个阶段：配置项已分配到实例，但el还没有挂载
        
        created  
        
        **在这个钩子函数内部请求数据**

        第三个阶段：生成虚拟dom，el没有挂载

        beforeMount

        第四个阶段：生成真实dom，el完成挂载

        mounted

    第二个阶段：更新阶段 -------> 执行很多次

        数据更新，dom没有改变

        beforeUpdate

        视图更新完毕

        updated

    第三个阶段：销毁阶段 ------>  只执行一次

        销毁前

        beforeDestory

        销毁完毕

        destoryed


#### 四、组件：

组件划分：功能划分  页面区域 header footer connect

- **全局注册组件** ：所有的vue实例都可以使用

第一个参数：组件名  string  

有两种命名方式：button-counter  buttonCounter

最终在使用时，必须使用button-counter

第二个参数：

组件是vue可复用的实例，所以它有data，computed，watch，methods这些方法

```
Vue.component('组件名',{
    template:'内容'
})

```    

- **局部注册组件** ：需要使用components，只能在当前实例内使用。


- **组件使用的基本流程：**

```
第一步：定义 --- 组件对象

如果组件比较复杂时，需要单独定义一个组件对象，简单的话，直接放在第二步即可。

第二步：注册 --- 给组件对象注册一个名字

第三步：使用 --- 用组件名
```

**注：1）组件名不能和现有的标签名重复。2）组件一般是双标签。**

---
#### vue-cli Vue.js 开发的标准工具  vue-cli 3.x版本

中文官网：https://cli.vuejs.org/zh

```
npm i @vue/cli -g 

vue -V 查看版本号

vue create 项目名

```

@vue/cli 3.x版本配置代理，需要在根目录下面建一个vue.config.js

```
module.exports = {
    devServer:{
        //"proxy":'http://localhost:3000'  配置一个代理
        
        proxy:{ //配置多个代理
            '/users':{
                target:'http://localhost:3000',
                ws:true,
                changeOrigin: true
            }
        }
    }
}
```

**问题：在使用vue create 项目时，报错，

解决办法：在命令行执行：npm config set registry https://registry.npm.taobao.org **

vue-cli 2.x版本

```
cnpm i vue-cli -g 安装的是2.x版本的

vue init webpack 项目名

```
vue-cli 2.x版本 配置代理，需要配置config文件夹下的index.js的proxyTable字段

```
proxyTable: {  
    '/users':'http://localhost:3000'
}
```

>过渡动画

在vue中，提供transition组件，可以用来实现动画效果。

在下列情形中，可以给任何元素和组件添加**进入/离开**过渡

1> 条件渲染(v-if)

2> 条件展示(v-show)

3> 动态组件

4> 组件根节点

>vue自定义指令

**1. 全局注册指令**

```
//例：注册focus的指令
Vue.directive('focus',{
    inserted:function(el){
        el.focus();
    }
})
```
**2. 局部注册指令**

```
directives:{
    focus:{
        inserted:function(el){
            el.focus()
        }
    }
}
```
---

### axios是一个基于promise的用于浏览器和nodejs的http客户端。

**安装：**

```
cnpm i axios -S

```

**axios的基本用法：**

在组件内先引用

```
import axios from axios

```

**get 请求**

```
//不带参数
axios.get('/users/api/userlist').then((res) => {
    //成功
}).catch((error)=>{
    //请求失败
})
//不带参数
axios.get('/users/api/del?id=1').then((res) => {
    //成功
}).catch((error)=>{
    //请求失败
})

axios.get('/users/api/del',{params:{id:1}}).then((res) => {
    //成功
}).catch((error)=>{
    //请求失败
})

```
**post 请求**

```
axios.post('/users/api/login',{name:'lili',pwd:'123'}).then((res) => {
    //成功
}).catch((error)=>{
    //请求失败
})

```

**多个请求**

```
axios.all([axios.get('/api/list'),axios.get('/api/userlist')]).then(axios.spread(function(res1,res2){
    //两个请求全部完成
}))

```

**注：以上必须要在每个组件内引用**

优化：在main.js内，把axios包import进来，然后赋给Vue.prototype,

即：Vue.prototype.http = axios,这样就变成了全局的变量，不需要在每个组件内import了。

---

### vue-router vue官方的路由器 和vue.js配合使用构建单页面应用

**安装**

```
cnpm i vue-router -S

import VueRouter from 'vue-router'
import Home from '@/components/Home'

Vue.use(VueRouter)  //需要使用Vue.use()来明确的安装路由功能

let router = new VueRouter({
    routers:[
        {
            path:'/',
            component:Home,
            name:'home'
        },
        {
            path:'/about',
            name:'about',
            component:About,
            redirect:'/about/news',   //重定向
            children:[
                {
                    path:'news',   //   /about/news 需要注意的是'/'嵌套的路径是根路径
                    name:'news',
                    component:News
                },
                {
                    path:'order',   //   /about/news 需要注意的是'/'嵌套的路径是根路径
                    name:'order',
                    component:Order
                }
            ]
        },
        {   
            path:'*',  //匹配所有的路由， 如果路由输错，会直接导到Home
            component:Home
        }
    ],
    mode:'history'  //这种模式在地址栏没有 #
})

router简单的使用介绍

```
这种跳转**<a href="/"/>首页</a>**会重新刷新页面

在vue-router里，使用**router-link**组件来导航，通过**to**指定路由，router-link会默认渲染成**a**标签，可以使用**tag**指定对应标签。

路由对应的组件会显示在**<router-view></router-view>**里

```
Header.vue

<router-link to="/" tag="span">主页</router-link>
<router-link to="/nav" tag="span">菜单</router-link>
<router-link :to="{name:'manage'}" tag="span">管理</router-link>
<router-link :to="{name:'about'}" tag="span">管理我们</router-link>

App.vue

<router-view></router-view>

```


- 编程式导航


在vue的实例中，可以使用$router访问路由的实例，因此可以使用this.$router.push()，此方法会想history栈里添加一条新的记录。   


































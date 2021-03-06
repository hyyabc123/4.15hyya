import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[
            {
                title:"第一道题答案是什么(a)",
                true:1,
                answer:[
                    {
                        id:1,
                        choose:'A'
                    },
                    {
                        id:2,
                        choose:'B'
                    },
                    {
                        id:3,
                        choose:'C'
                    },
                    {
                        id:4,
                        choose:'D'
                    }
                ]
            },
            {
                title:"第二道题答案是什么(b)1s",
                true:6,
                answer:[
                    {
                        id:5,
                        choose:'A'
                    },
                    {
                        id:6,
                        choose:'B'
                    },
                    {
                        id:7,
                        choose:'C'
                    },
                    {
                        id:8,
                        choose:'D'
                    }
                ]
            },
            {
                title:"第三道题答案是什么(c)",
                true:11,
                answer:[
                    {
                        id:9,
                        choose:'A'
                    },
                    {
                        id:10,
                        choose:'B'
                    },
                    {
                        id:11,
                        choose:'C'
                    },
                    {
                        id:12,
                        choose:'D'
                    }
                ]
            },
            {
                title:"第四道题答案是什么(c)",
                true:15,
                answer:[
                    {
                        id:13,
                        choose:'A'
                    },
                    {
                        id:14,
                        choose:'B'
                    },
                    {
                        id:15,
                        choose:'C'
                    },
                    {
                        id:16,
                        choose:'D'
                    }
                ]
            },
            {
                title:"第五道题答案是什么(c)",
                true:19,
                answer:[
                    {
                        id:17,
                        choose:'A'
                    },
                    {
                        id:18,
                        choose:'B'
                    },
                    {
                        id:19,
                        choose:'C'
                    },
                    {
                        id:20,
                        choose:'D'
                    }
                ]
            }
        ],
        haderlist:[
            {
                title:"福",
                flag:2
            },
            {
                title:"禄",
                flag:2
            },
            {
                title:"寿",
                flag:2
            },
            {
                title:"喜",
                flag:2
            },{
                title:"财",
                flag:2
            }
            
        ]
    },
    actions:{
        
    },
    mutations:{
        change(state,obj){
            state.haderlist[obj.index].flag=obj.num
        }
    },
    getters:{
        listGetter(state){
            return (index)=>{
                return state.list[index]
            }
        },
        headlistGetter(state){
            return state.haderlist
        }
    }
})
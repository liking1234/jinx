import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuArr:[
            {
                index: 0,
                title: "svg表格",
                detail: "一个用svg画的网格,有可能去了解。",
                router:'/svgGrid'
            },
            {
                index: 1,
                title: "js高度",
                detail: "js获取各种高度,学习必备。",
                router:'/jsHeight'
            },
            {
                index: 2,
                title: "color-js颜色渐变",
                detail: "color-js插件实现颜色渐变",
                router:'/color-js'
            },
            {
                index: 3,
                title: "CSS mark && property",
                detail: "一行代码实现头像与国旗的融合",
                router:'/mark'
            },
            {
                index: 4,
                title: "CSS smoke",
                detail: "css实现烟雾效果",
                router:'/smoke'
            },
            {
                index: 5,
                title: "CSS aurora",
                detail: "css实现极光效果",
                router:'/aurora'
            }
        ],
        name: 'LJG',
    },
    mutations: {
    },
    actions: {
    },
    getters:{
        getMenuArr:(state_store) =>{ return state_store.menuArr },
    },
})

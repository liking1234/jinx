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
import Vue from 'vue'
import Router from 'vue-router'
import atMenu from '../components/at-menu'
import grid from '../components/grid'
import jsHeight from '../components/jsHeight'
import sidebar from '../components/layout/sidebar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'atMenu',
            redirect: '/atMenu'
        },
        {
            path: '/atMenu',
            name: 'atMenu',
            component: atMenu,
            meta: {
                requireAuth: true
            }
        },
        {
            // home页面并不需要被访问，只是作为其它组件的父组件
            path: '/home',
            name: 'Home',
            component: sidebar,
            redirect: '/index',
            children: [
                {
                    path: '/svgGrid',
                    name: 'svg网格',
                    component: grid
                },
                {
                    path: '/jsHeight',
                    name: 'jsHeight',
                    component: jsHeight,
                    meta: {
                        requireAuth: true
                    }
                }
            ]
        },
        // {
        //     path: '/svgGrid',
        //     name: 'svg网格',
        //     component: grid
        // },
        // {
        //     path: '/jsHeight',
        //     name: 'jsHeight',
        //     component: jsHeight,
        //     meta: {
        //         requireAuth: true
        //     }
        // }
    ]
})

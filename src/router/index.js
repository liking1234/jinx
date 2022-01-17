import Vue from 'vue'
import Router from 'vue-router'
import atMenu from '../components/at-menu'
import grid from '../view/grid/grid'
import jsHeight from '../view/jsheight/jsHeight'
import home from '../view/home'
import colorJs from '../view/colorjs/colorJs'
import mark from '../view/mark/mark'

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
            component: home,
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
                },
                {
                    path: '/color-js',
                    name: 'color-js',
                    component: colorJs,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/mark',
                    name: 'mark',
                    component: mark,
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

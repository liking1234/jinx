import Vue from 'vue'
import Router from 'vue-router'
import atMenu from '../components/at-menu'
import grid from '../view/grid/grid'
import jsHeight from '../view/jsheight/jsHeight'
import home from '../view/home'
import colorJs from '../view/colorjs/colorJs'
import mark from '../view/mark/mark'
import smoke from '../view/smoke/smoke'
import aurora from '../view/aurora/aurora'
import harmony from '../view/harmony/harmony'
import gridLayout from '../view/grid/grid-layout'
import transform from '../view/transform/transform'
import imageContrastWidget from '../view/imageContrastWidget/imageContrastWidget'
import process from '../view/process/process'
import textUnderlines from '../view/textUnderlines/textUnderlines'
import typing from '../view/typing/typing'

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
                },
                {
                    path: '/smoke',
                    name: 'smoke',
                    component: smoke,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/aurora',
                    name: 'aurora',
                    component: aurora,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/harmony',
                    name: 'harmony',
                    component: harmony,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/grid-layout',
                    name: '/grid-layout',
                    component: gridLayout,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/transform',
                    name: '/transform',
                    component: transform,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/imageContrastWidget',
                    name: '/imageContrastWidget',
                    component: imageContrastWidget,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/process',
                    name: '/process',
                    component: process,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/textUnderlines',
                    name: '/textUnderlines',
                    component: textUnderlines,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/typing',
                    name: '/typing',
                    component: typing,
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

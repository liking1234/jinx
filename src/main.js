import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './style/common.css'
import store from "@/store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugin/hljs'
import './plugin/iconfont/iconfont.js'
import './plugin/iconfont/index.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

// 事件总线
Vue.prototype.$EventBus = new Vue()


// const EventBus = new Vue();
//
// Object.defineProperties(Vue.prototype, {
//   $EventBus: {
//     get: function () {
//       return EventBus
//     }
//   }
// })

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   VueRouter,
//   store,
//   components: { App },
//   template: '<App/>'
// })

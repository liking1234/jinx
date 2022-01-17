// event-bus.js
// import Vue from 'vue'
// export const EventBus = new Vue()

//另一种方式是在
// main.js
// Vue.prototype.$EventBus = new Vue()'

import Vue from "vue";
const bus = new Vue();
export default bus;



// import Vue from "vue";
//
// const EventBus = new Vue();
//
// Object.defineProperties(Vue.prototype, {
//     $EventBus: {
//         get: function () {
//             return EventBus
//         }
//     }
// })

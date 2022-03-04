import Vue from "vue";
import vueHljs from "vue-hljs";
import hljs from "highlight.js";
//if you want to use default color, import this css file
import "./github-dark.css"
// Vue.directive('hljs', el => {
//     let blocks = el.querySelectorAll('pre code');
//     Array.prototype.forEach.call(blocks, hljs.highlightBlock);
// });

//use
Vue.use(vueHljs, { hljs })

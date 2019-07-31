import Vue from 'vue'
import LyTab from "ly-tab";
import App from './App'


// 引入路由器
import router from "./router/index";

Vue.use(LyTab);
new Vue({
  el: '#app',
  router,
  // 作用渲染视图，并给el挂载
  // --vue1.0的语法
  // components: { App },
  // template: '<App/>'
  // --vue2.0的语法
  render: h => h(App)
});

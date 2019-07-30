import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  // 作用渲染视图，并给el挂载
  // --vue1.0的语法
  // components: { App },
  // template: '<App/>'
  // --vue2.0的语法
  render: h => h(App)
});

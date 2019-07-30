// 1.引入对应模块
import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./../pages/Home/Home";
import Recomment from "./../pages/Recomment/Recomment";
import Search from "./../pages/Search/Search";
import Chat from "./../pages/Chat/Chat";
import Me from "./../pages/Me/Me";
// 2.声明使用
Vue.use(VueRouter);
// 3.输出路由对象
export default new VueRouter({
  // 3.1 配置一级路由
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/recomment",
      component: Recomment
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/chat",
      component: Chat
    },
    {
      path: "/me",
      component: Me
    },
    {
      path: "/",
      redirect: "/home"
    },
  ]
});
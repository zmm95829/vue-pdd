// 1.引入对应模块
import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./../pages/Home/Home";
import Recomment from "./../pages/Recomment/Recomment";
import Search from "./../pages/Search/Search";
import Chat from "./../pages/Chat/Chat";
import Me from "./../pages/Me/Me";
import Hot from "./../pages/Home/Children/Hot.vue";
// 2.声明使用
Vue.use(VueRouter);
// 3.输出路由对象
export default new VueRouter({
  // 3.1 配置一级路由
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        { path: "hot", component: () => import("@/pages/Home/Children/Hot.vue")},
        { path: "box", component: () => import("@/pages/Home/Children/Box.vue")},
        { path: "ele", component: () => import("@/pages/Home/Children/Ele.vue")},
        { path: "food", component: () => import("@/pages/Home/Children/Food.vue")},
        { path: "man", component: () => import("@/pages/Home/Children/Man.vue")},
        { path: "mbaby", component: () => import("@/pages/Home/Children/Mbaby.vue")},
        { path: "dress", component: () => import("@/pages/Home/Children/Dress.vue")},
        { path: "shirt", component: () => import("@/pages/Home/Children/Shirt.vue")},
        { path: "general", component: () => import("@/pages/Home/Children/General.vue")},
        { path: "/", redirect: "hot" },
      ]
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
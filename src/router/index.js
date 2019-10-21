import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "temp",
      component: () => import("@/views/Templet")
    },
    {
      path: "/pcTemp",
      name: "pcTemp",
      component: () => import("@/layout/computer"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Main")
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/views/Register")
        }
      ]
    },
    {
      path: "/terTemp",
      name: "terTemp",
      component: () => import("@/layout/terminal"),
      children: [
        {
          path: "/funs/:category",
          name: "funs",
          component: () => import("@/views/terminal/Funs"),
          meta: { bar: true }
        },
        {
          path: "/detail",
          name: "detail",
          component: () => import("@/views/terminal/Detail"),
          meta: { detail: true }
        },
        {
          path: "/me",
          name: "me",
          component: () => import("@/views/terminal/Me"),
          meta: { nohead: true, bar: true }
        },
        {
          path: "/friends",
          name: "friends",
          component: () => import("@/views/terminal/Friends"),
          meta: { nohead: true, bar: true }
        },
        {
          path: "/makefun",
          name: "makefun",
          component: () => import("@/views/terminal/MakeFun"),
          meta: { nohead: true, submit: true }
        },
        {
          path: "/search",
          name: "search",
          component: () => import("@/views/terminal/Search"),
          meta: { nohead: true, bar: true }
        }
      ]
    },
    {
      path: "/listlayout",
      name: "listlayout",
      component: () => import("@/layout/terminal/ListLayout"),
      meta: { nohead: true, bar: true },
      children: [
        {
          path: "/collections",
          name: "collections",
          component: () => import("@/views/terminal/Collections"),
          meta: { title: "我的收藏" }
        },
        {
          path: "/messages",
          name: "messages",
          component: () => import("@/views/terminal/Messages"),
          meta: { title: "我的消息" }
        },
        {
          path: "/footmark",
          name: "footmark",
          component: () => import("@/views/terminal/Footmark"),
          meta: { title: "我的足迹" }
        }
      ]
    }
  ]
});

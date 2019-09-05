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
          component: () => import("@/views/terminal/Funs")
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
          meta: { nohead: true }
        },
        {
          path: "/friends",
          name: "friends",
          component: () => import("@/views/terminal/Friends"),
          meta: { nohead: true }
        }
      ]
    }
  ]
});

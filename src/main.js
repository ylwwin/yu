// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/font/iconfont.css";
import axios from "axios";

import Yicon from "@/components/base/terminal/Yicon";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.component("y-icon", Yicon);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as urls from "@/config/env";

import "./permission";
import "./settings";

import "@/styles/index.scss"; // global css

// 加载相关url地址
Object.keys(urls).forEach((key) => {
  Vue.prototype[key] = urls[key];
  console.log(key, urls[key]);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

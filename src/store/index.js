import Vue from "vue";
import Vuex from "vuex";
import setting from "./modules/setting";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { setting },
  state: {},
  mutations: {},
  actions: {},
  getters,
});

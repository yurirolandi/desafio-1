import Vue from "vue";
import Vuex from "vuex";
import Insights from "./modules/Insights";
import IsLoading from "./modules/isLoading";
import Snackbars from "./modules/Snackbars";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Insights,
    IsLoading,
    Snackbars,
  },
});

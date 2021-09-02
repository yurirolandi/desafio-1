import { insightsServices } from "@/services/insights";
export default {
  state: {
    insights: [],
    search: "",
  },
  getters: {
    getInsights(state) {
      const insightsFiltered = state.insights.filter((insight) => {
        return insight.texto.includes(state.search);
      });
      return insightsFiltered.length ? insightsFiltered : state.insights;
    },
  },
  mutations: {
    setInsights(state, payload) {
      return (state.insights = payload);
    },
    setSearchInsights(state, payload) {
      return (state.search = payload);
    },
  },
  actions: {
    async getInsightsList({ commit }) {
      try {
        commit("setIsloading", true);
        const insightsList = await insightsServices.getInsights();
        commit("setInsights", insightsList);
        commit("setIsloading", false);
      } catch (error) {
        commit("setIsloading", false);
        console.error("Houve um erro - Store/getInsightsList", error);
      }
    },
    async CreateInsightsList({ commit, dispatch }, payload) {
      try {
        commit("setIsloading", true);
        await insightsServices.createInsights(payload);
        await dispatch("getInsightsList", payload);
        commit("setIsloading", false);
      } catch (error) {
        commit("setIsloading", false);
        console.error("Houve um erro - Store/CreateInsightsList", error);
      }
    },
    async UpdateInsightsList({ commit, dispatch }, payload) {
      try {
        commit("setIsloading", true);
        const { body, id } = payload;

        await insightsServices.updateInsights(id, body);
        await dispatch("getInsightsList");
        commit("setIsloading", false);
      } catch (error) {
        commit("setIsloading", false);
        console.error("Houve um erro - Store/UpdateInsightsList", error);
      }
    },
    async DeleteInsightsList({ commit, dispatch }, payload) {
      try {
        commit("setIsloading", true);
        await insightsServices.deleteInsights(payload);
        await dispatch("getInsightsList");
        commit("setIsloading", false);
      } catch (error) {
        commit("setIsloading", false);
        console.error("Houve um erro - Store/DeleteInsightsList", error);
      }
    },
  },
};

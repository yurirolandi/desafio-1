export default {
  state: {
    isLoading: false,
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setIsloading(state, payload) {
      return (state.isLoading = payload);
    },
  },
};

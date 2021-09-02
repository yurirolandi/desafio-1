export default {
  state: {
    snackBarStatus: {
      snackbar: false,
      timeout: 3000,
    },
    snackBarText: "",
    snackBarColor: "",
  },
  getters: {
    getSnackBarStatus(state) {
      return state.snackBarStatus;
    },
    getSnackBarText(state) {
      return state.snackBarText;
    },
    getSnackBarColor(state) {
      return state.snackBarColor;
    },
  },
  mutations: {
    setSnackBarStatus(state, payload) {
      return (state.snackBarStatus.snackbar = payload);
    },
    setSnackBarText(state, payload) {
      return (state.snackBarText = payload);
    },
    setSnackBarColor(state, payload) {
      return (state.snackBarColor = payload);
    },
  },
  actions: {
    showSnackBar({ commit }, { text, color }) {
      commit("setSnackBarStatus", true);
      commit("setSnackBarText", text);
      commit("setSnackBarColor", color);
    },
  },
};

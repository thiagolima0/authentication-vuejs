import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bear ${userData.token}`;
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    async register({ commit }, credetials) {
      return axios
        .post("//localhost:3000/register", credetials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    async login({ commit }, credetials) {
      return axios
        .post("//localhost:3000/login", credetials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    async logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
  modules: {},
});

import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bear ${userData.token}`;
    },
  },
  actions: {
    register({ commit }, credetials) {
      return axios
        .post("//localhost:3000/register", credetials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
  },
  modules: {},
});

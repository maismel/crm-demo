import { fetchUserData, loginAPI } from "../../api/auth";

const authModule = {
  namespaced: true,

  state: () => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    isAuth: !!localStorage.getItem("accessToken"),
  }),

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
      state.isAuth = true;
    },
    SET_TOKENS(state, { accessToken, refreshToken }) {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    LOGOUT(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuth = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      const { accessToken, refreshToken } = await loginAPI(username, password);
      commit("SET_TOKENS", { accessToken, refreshToken });

      const userData = await fetchUserData();
      commit("SET_USER", userData);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(userData));
    },
    async logout({ commit }) {
      commit("LOGOUT");
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuth,
    user: (state) => state.user,
  },
};

export default authModule;

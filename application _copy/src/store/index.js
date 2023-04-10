import { createStore } from "vuex";
import AuthService from "../services/authService.js";
// const user = JSON.parse(localStorage.getItem('user'));
const store = createStore({
  // namespaced: true,
  //state
  state: {
    user: null,
    status: false,
    message: "",
    success:false
  },
  //mutations
  mutations: {
    loginSuccess(state, user) {
      // console.log("user:::", user);
      state.user = user;
      state.message = user.message;
      state.success = user.success;
    },
    loginFail(state, err) {
      state.success= err.success;
      state.user = null;
      state.message = err.message;
    },
    logout(state) {
      state.status = false;
      state.user = null;
    },
    registerSuccess(state, data) {
      state.status = true;
      state.message = data.message;
    },
    registerFail(state, err) {
      state.message = err.message
    },
  },

  //actions
  actions: {
    login({ commit }, user) {
      return AuthService.login(user)
      .then((user) => {commit("loginSuccess", user)})
      .catch((err)=>{
        console.log("err",err.response.data);
        commit("loginFail",err.response.data)
      });
    },

    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },

    register({ commit }, user) {
      const { profile } = user;
      const filePath = (window.URL || window.webkitURL).createObjectURL(profile);
      user.profile = filePath;
      return AuthService.register(user).then(
        (response) => {
          console.log("response::", response);
          commit("registerSuccess", response.data);
        },
        (error) => {
          commit("registerFail",error.response.data);
        }
      );
    },
  },
});

export default store;

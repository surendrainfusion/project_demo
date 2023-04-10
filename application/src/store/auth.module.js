import AuthService from '../services/authService.js';

const user = JSON.parse(localStorage.getItem('user'));

export const auth = {
  namespaced: true,
  //state
  state: user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null },

  //mutations
  mutations: {
    loginSuccess(state, user) {
      // console.log("state:::",state);
      // console.log("user:::::",user);
      
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  },

  //actions
  actions: {
    login({ commit }, user) {
      // console.log("action login", user)
      return AuthService.login(user).then(
        user => {
          // console.log("user:::",user);
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },

    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },

    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
};
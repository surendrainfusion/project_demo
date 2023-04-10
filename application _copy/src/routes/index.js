import { createWebHistory, createRouter } from "vue-router";

import signup from "../components/signupView.vue";
import signin from "../components/signinView.vue";
import Home from "../components/homeView.vue";
import Profile from "../components/profileView.vue"
import BoardUser from "../components/BoardUser.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: signin,
    },
    {
      path: "/signup",
      component: signup,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/user",
      name: "user",
      component: BoardUser,
    },
  ],
});

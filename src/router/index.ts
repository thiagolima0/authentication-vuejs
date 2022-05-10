import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import LoginUser from "@/views/LoginUser.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAtuh: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUser,
  },
  {
    path: "/login",
    name: "login",
    component: LoginUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAtuh) && !loggedIn) {
    if (!loggedIn) {
      next({ name: "Home" });
    }
  }
  next();
});

export default router;

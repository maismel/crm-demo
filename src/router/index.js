import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [{ path: "", component: HomeView }],
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [{ path: "", component: DashboardView }],
  },
];

const router = createRouter({
  history: createWebHashHistory("/crm-demo/"),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = store.getters["auth/isAuthenticated"];

  if (to.path === "/login" && isAuth) {
    next("/");
    return;
  }

  if (to.matched.some((r) => r.meta.requiresAuth) && !isAuth) {
    next("/login");
    return;
  }

  next();
});

export default router;

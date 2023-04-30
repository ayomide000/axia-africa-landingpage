import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/Schools/SchoolNav.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

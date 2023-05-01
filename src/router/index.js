import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
// import SchoolOfProduct from "../views/Schools/SchoolOfProduct/index.vue";

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
  {
    path: "/school/product",
    name: "SchoolOfProduct",
    component: () => import("../views/Schools/School of Product/index.vue"),
  },

  // {
  //   path: "/school/product",
  //   name: "SchoolOfProduct",
  //   component: SchoolOfProduct,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

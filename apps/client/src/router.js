import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: () => import("./views/HomePage.vue"),
  },
  {
    path: "/category/:id",
    name: "Category Page",
    component: () => import("./views/ProductCategory.vue"),
  },
  {
    path: "/product/:id",
    name: "Product Details",
    component: () => import("./views/ProductDetails.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "Page Not Found",
    component: () => import("./views/NotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

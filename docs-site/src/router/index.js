import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Records from "../views/records/index.vue";
import Category from "../views/category/index.vue";
import Docs from "../views/docs/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/records",
    name: "Records",
    component: Records
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/docs/:id",
    name: "Docs",
    component: Docs
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
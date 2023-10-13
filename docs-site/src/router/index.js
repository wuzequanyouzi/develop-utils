import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Records from "../views/records/index.vue";
import Tools from "../views/tools/index.vue";
import Docs from "../views/docs/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: "/records",
    name: "Records",
    component: Records,
    meta: {
      title: '归纳'
    }
  },
  {
    path: "/tools",
    name: "Tools",
    component: Tools,
    meta: {
      title: '小工具'
    }
  },
  {
    path: "/docs/:id",
    name: "Docs",
    component: Docs,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta?.title) {
    window.document.title = to.meta.title;
  } else {
    window.document.title = '学习笔记';
  }
  return true;
})

export default router;
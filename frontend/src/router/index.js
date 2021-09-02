import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create-insights",
    name: "Create",
    component: () => import("@/views/CreateInsight.vue"),
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import("@/views/CreateInsight.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

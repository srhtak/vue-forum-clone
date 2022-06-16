import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

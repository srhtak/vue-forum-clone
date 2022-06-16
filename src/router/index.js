import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import NotFound from "@/components/NotFound.vue";
import sourceData from "@/data.json";

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
    beforeEnter: (to, from, next) => {
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      if (threadExists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

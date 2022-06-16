import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import ThreadShow from "@/views/ThreadShow";
import Forum from "@/views/Forum";
import NotFound from "@/views/NotFound.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: Forum,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      if (threadExists) {
        next();
      } else {
        next({
          name: "NotFound",
        });
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

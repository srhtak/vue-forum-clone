import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import ThreadShow from "@/views/ThreadShow";
import threadCreate from "@/views/ThreadCreate";
import Forum from "@/views/Forum";
import NotFound from "@/views/NotFound.vue";
import sourceData from "@/data.json";
import Category from "@/views/Category.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/me",
    name: "Profile",
    component: Profile,
    meta: {
      toTop: true,
      smoothScroll: true,
    },
  },
  {
    path: "/me/edit",
    name: "ProfileEdit",
    component: Profile,
    props: { edit: true },
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: Forum,
    props: true,
  },
  {
    path: "/form/:forumId/thread/create",
    name: "ThreadCreate",
    component: threadCreate,
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
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
});

export default router;

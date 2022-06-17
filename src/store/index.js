import { defineStore } from "pinia";
import sourceData from "@/data.json";
export const useData = defineStore({
  id: "source",
  state: () => {
    return {
      data: sourceData,
      authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
    };
  },
  getters: {
    authUser: (state) =>
      state.data.users.find((user) => user.id === state.authId),
  },
  actions: {
    createPost(post) {
      post.id = "ggg" + Math.random();
      this.data.posts.push(post);
      this.appendPostToThread(post.id, post.threadId);
    },
    appendPostToThread(postId, threadId) {
      const thread = this.data.threads.find((thread) => thread.id === threadId);
      thread.posts.push(postId);
    },
  },
});

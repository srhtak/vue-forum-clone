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
    authUser: (state) => {
      const user = state.data.users.find((user) => user.id === state.authId);

      if (!user) return null;

      return {
        ...user,
        get Posts() {
          return state.data.posts.filter((post) => post.userId === user.id);
        },

        get PostsCount() {
          return this.Posts.length;
        },

        get Threads() {
          return state.data.threads.filter(
            (thread) => thread.userId === user.id
          );
        },

        get ThreadsCount() {
          return this.Threads.length;
        },
      };
    },
  },
  actions: {
    createPost(post) {
      post.id = "ggg" + Math.random();
      post.userId = this.authId;
      (post.publishedAt = Math.floor(Date.now() / 1000)),
        this.data.posts.push(post);
      this.appendPostToThread(post.id, post.threadId);
    },
    createThread(title, forumId, post) {
      const id = "ggg" + Math.random();
      const userId = this.authId;
      const publishedAt = Math.floor(Date.now() / 1000);
      const thread = { forumId, title, publishedAt, userId, id };
      this.data.threads.push(thread);
      this.appendThreadToForum(forumId, id);
      this.createPost({ ...post, threadId: id });
    },
    setUser(user) {
      const userIndex = this.data.users.findIndex(
        (user) => user.id === this.authId
      );
      this.data.users[userIndex] = user;
    },

    appendPostToThread(postId, threadId) {
      const thread = this.data.threads.find((thread) => thread.id === threadId);
      thread.posts = thread.posts || [];
      thread.posts.push(postId);
    },
    appendThreadToForum(forumId, threadId) {
      const forum = this.data.forums.find((forum) => forum.id === forumId);
      forum.threads = forum.threads || [];
      forum.threads.push(threadId);
    },
  },
});

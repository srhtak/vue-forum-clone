<script setup>
import soureData from "@/data.json";
import { ref, computed } from "vue";
import PostList from "../components/PostList.vue";

const props = defineProps(["id"]);

const threads = ref(soureData.threads);
const posts = ref(soureData.posts);
const newPostText = ref("");

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.id);
});

const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === props.id);
});

const addPost = () => {
  const postId = "ggg" + Math.random();
  const post = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: "L664y3qZSubDbT1R6npC0EEybJ73",
  };
  posts.value.push(post);
  thread.posts.push(postId);
};
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            v-model="newPostText"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

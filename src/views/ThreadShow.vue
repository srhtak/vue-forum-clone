<script setup>
import soureData from "@/data.json";
import { ref, computed } from "vue";
import PostList from "../components/PostList.vue";
import PostEditor from "../components/PostEditor.vue";

const props = defineProps(["id"]);

const threads = ref(soureData.threads);
const posts = ref(soureData.posts);

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.id);
});

const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === props.id);
});

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  posts.value.push(post);
  thread.value.posts.push(post.id);
  console.log(post);
};
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost" />
  </div>
</template>

<style lang="scss" scoped></style>

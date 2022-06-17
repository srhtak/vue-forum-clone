<script setup>
import { useData } from "@/store/index";
import { computed } from "vue";
import PostList from "../components/PostList.vue";
import PostEditor from "../components/PostEditor.vue";

const source = useData();
const props = defineProps(["id"]);

const threads = computed(() => {
  return source.data.threads;
});

const posts = computed(() => {
  return source.data.posts;
});

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
  source.createPost(post);
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

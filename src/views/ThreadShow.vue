<script setup>
import soureData from "@/data.json";
import { ref, computed } from "vue";
import PostList from "../components/PostList.vue";

const props = defineProps(["id"]);

const threads = ref(soureData.threads);
const posts = ref(soureData.posts);

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.id);
});

const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === props.id);
});
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
  </div>
</template>

<script setup>
import ThreadList from "@/components/ThreadList.vue";
import sourceData from "@/data.json";
import { computed, ref } from "vue";

const props = defineProps(["id"]);

const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id);
});

const filterThreads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id);
});
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="filterThreads" />
  </div>
</template>

<style lang="scss" scoped></style>

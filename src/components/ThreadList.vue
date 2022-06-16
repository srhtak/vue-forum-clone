<script setup>
import soureData from "@/data.json";
import { ref } from "vue";
import AppDate from "./AppDate.vue";

const props = defineProps(["threads"]);
const posts = ref(soureData.posts);
const users = ref(soureData.users);

const userById = (userId) => {
  return users.value.find((p) => p.id === userId);
};
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in props.threads" :key="thread.id" class="thread">
        <div class="right-col">
          <p>
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
              >{{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By <a href="@">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }}
          </p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div class="right-col">
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>

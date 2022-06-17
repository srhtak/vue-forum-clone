<script setup>
import { useData } from "@/store/index";
import PostList from "@/components/PostList.vue";
import { computed } from "vue";

const source = useData();

const userPosts = computed(() => {
  return source.data.posts.filter((post) => post.userId === source.authUser.id);
});

const userPostsCount = computed(() => {
  return userPosts.value.length;
});

const userThreads = computed(() => {
  return source.data.threads.filter(
    (thread) => thread.userId === source.authUser.id
  );
});

const userThreadsCount = computed(() => {
  return userThreads.value.length;
});
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img :src="source.authUser.avatar" alt="" class="avatar-xlarge" />
          </p>

          <h1 class="title">{{ source.authUser.username }}</h1>

          <p class="text-lead">{{ source.authUser.name }}</p>

          <p class="text-justify">
            {{ source.authUser.bio || "No bi specific" }}
          </p>

          <span class="online">{{ source.authUser.username }} is online</span>

          <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
          </div>

          <hr />

          <p v-if="source.authUser.website" class="text-large text-center">
            <i class="fa fa-globe"></i>
            <a :href="source.authUser.website">{{ source.authUser.website }}</a>
          </p>
        </div>

        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
            >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
const props = defineProps(["user"]);
</script>

<template>
  <div class="profile-card">
    <p class="text-center">
      <img :src="user.avatar" alt="" class="avatar-xlarge" />
    </p>

    <h1 class="title">{{ user.username }}</h1>

    <p class="text-lead">{{ user.name }}</p>

    <p class="text-justify">
      {{ user.bio || "No bi specific" }}
    </p>

    <span class="online">{{ user.username }} is online</span>

    <div class="stats">
      <span>{{ user.PostsCount }} posts</span>
      <span>{{ user.ThreadsCount }} threads</span>
    </div>

    <hr />

    <p v-if="user.website" class="text-large text-center">
      <i class="fa fa-globe"></i>
      <a :href="user.website">{{ user.website }}</a>
    </p>
  </div>
</template>

<style lang="scss" scoped></style>

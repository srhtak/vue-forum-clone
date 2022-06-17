<script setup>
import { useData } from "@/store/index";
import PostList from "@/components/PostList.vue";
import { computed } from "vue";
import UserProfileCard from "@/components/UserProfileCard.vue";

const source = useData();
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard :user="source.authUser" />
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

        <PostList :posts="source.authUser.Posts" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

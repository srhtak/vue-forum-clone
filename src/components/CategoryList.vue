<script setup>
import ForumList from "./ForumList.vue";
import sourceData from "@/data.json";

const props = defineProps(["categories"]);

const getForumsForCategory = (category) => {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id);
};
</script>

<template>
  <ForumList
    v-for="category in props.categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<style lang="scss" scoped></style>

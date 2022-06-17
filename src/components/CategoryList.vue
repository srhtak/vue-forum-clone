<script setup>
import ForumList from "./ForumList.vue";
import { useData } from "@/store/index";

const source = useData();

const props = defineProps(["categories"]);

const getForumsForCategory = (category) => {
  return source.data.forums.filter((forum) => forum.categoryId === category.id);
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

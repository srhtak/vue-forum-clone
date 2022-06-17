<script setup>
import ForumList from "@/components/ForumList.vue";
import { computed } from "@vue/reactivity";
import { useData } from "@/store/index";

const source = useData();
const props = defineProps(["id"]);

const category = computed(() => {
  return source.data.categories.find((category) => category.id === props.id);
});

const getForumsForCategory = (category) => {
  return source.data.forums.filter((forum) => forum.categoryId === category.id);
};
console.log(category);
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<style lang="scss" scoped></style>

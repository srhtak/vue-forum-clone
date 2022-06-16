<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="newPostText"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits();
const newPostText = ref("");

const save = () => {
  const postId = "ggg" + Math.random();
  const post = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    userId: "L664y3qZSubDbT1R6npC0EEybJ73",
  };
  emit("save", { post });
  newPostText.value = "";
};
</script>

<style lang="scss" scoped>
.col-full {
  textarea {
    width: 100%;
  }
}
</style>

<script setup>
import { ref } from "vue";

const emit = defineEmits();
const newPostText = ref("");

const save = () => {
  const post = {
    text: newPostText.value,
  };
  emit("save", { post });
  newPostText.value = "";
};
</script>

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

<style lang="scss" scoped>
.col-full {
  textarea {
    width: 100%;
  }
}
</style>

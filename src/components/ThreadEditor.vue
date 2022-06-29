<script setup>
import { ref } from "vue";

const emit = defineEmits();

const title = ref("");
const content = ref("");

const handleSave = () => {
  emit("save", { title: title.value, content: content.value });
};
</script>

<template>
  <form @submit.prevent="handleSave">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="title"
        type="text"
        id="thread_title"
        class="form-input"
        name="title"
      />
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="content"
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button @click.prevent="emit('cancel')" class="btn btn-ghost">
        Cancel
      </button>
      <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>

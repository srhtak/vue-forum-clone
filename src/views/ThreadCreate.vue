<script setup>
import { useData } from "@/store/index";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const source = useData();

const title = ref("");
const content = ref("");

const router = useRouter();

const props = defineProps(["forumId"]);

const forum = computed(() => {
  return source.data.forums.find((forum) => forum.id === props.forumId);
});

const save = () => {
  source.createThread(title.value, props.forumId);
  router.push({ name: "Forum", params: { id: props.forumId } });
};
</script>

<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>
    <form @submit.prevent="save">
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
        <button class="btn btn-ghost">Cancel</button>
        <button class="btn btn-blue" type="submit" name="Publish">
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>

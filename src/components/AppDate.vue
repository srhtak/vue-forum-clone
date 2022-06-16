<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

const props = defineProps(["timestamp"]);

const diffForHumans = () => {
  return dayjs.unix(props.timestamp).fromNow();
};

const hummanFriendlyDate = () => {
  return dayjs.unix(props.timestamp).format("llll");
};
</script>

<template>
  <span class="post-date text-faded" :title="hummanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<style lang="scss" scoped></style>

<template>
  <div class="event-card">
    <span>@{{ props.event.time }} on {{ props.event.date }}</span>
    <h4>{{ props.event.title }}</h4>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  event: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<style scoped>
.event-card {
  width: 13em;
  margin: 1em auto 1em auto;
  padding: 1em;
  border: solid 1px #2c3e50;
  cursor: pointer;
  transition: all 0.2s linear;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card h4 {
  font-size: 1.4em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
</style>

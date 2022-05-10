<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>Loading events</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import EventCard from "@/components/EventCard.vue";
import EventModel from "@/model/EventModel";

const isLoading = ref(true);
const events = ref([] as EventModel[]);

const fecthDashboard = () => {
  axios.get("//localhost:3000/dashboard").then(({ data }) => {
    events.value = data.events.events;
    isLoading.value = false;
  });
};

fecthDashboard();
</script>

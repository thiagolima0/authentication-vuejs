<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>Loading events</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import EventCard from "@/components/EventCard.vue";
import EventModel from "@/model/EventModel";

export default defineComponent({
  components: { EventCard },
  data() {
    return {
      isLoading: true,
      events: [] as EventModel[],
    };
  },
  created() {
    axios.get("//localhost:3000/dashboard").then(({ data }) => {
      this.events = data.events.events;
      this.isLoading = false;
    });
  },
});
</script>

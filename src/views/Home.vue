<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link :to="{ name: 'login' }"> Login </router-link>
      or
      <router-link :to="{ name: 'register' }"> Register </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "@/store";

const loggedIn = computed(() => store.getters.loggedIn);
</script>

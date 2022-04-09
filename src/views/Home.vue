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

<script lang="ts">
import { defineComponent } from "vue";
import { authComputed } from "@/store/helpers";

export default defineComponent({
  computed: {
    ...authComputed,
  },
});
</script>

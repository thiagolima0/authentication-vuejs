<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name="password" value />

      <button type="submit" name="button">Login</button>
    </form>
    <router-link :to="{ name: 'register' }">
      Don't have a account? Register.
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "@/store";
import router from "@/router";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");

    function login() {
      store
        .dispatch("login", {
          email: email.value,
          password: password.value,
        })
        .then(() => {
          router.push({ name: "dashboard" });
        });
    }
    return {
      email,
      password,
      login,
    };
  },
});
</script>

<style scoped></style>

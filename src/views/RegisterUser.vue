<template>
  <div>
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name="password" value />
      <ul v-for="(err, index) in errors" :key="index">
        <li>{{ err }}</li>
      </ul>
      <button type="submit" name="button">Register</button>
    </form>
    <router-link :to="{ name: 'login' }">
      Already have an account? Login.
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "@/store";
import router from "@/router";

export default defineComponent({
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const errors = ref(null);

    function register() {
      store
        .dispatch("register", {
          name: name.value,
          email: email.value,
          password: password.value,
        })
        .then(() => {
          router.push({ name: "dashboard" });
        })
        .catch((err) => {
          errors.value = err.response.data.errors;
        });
    }
    return {
      name,
      email,
      password,
      errors,
      register,
    };
  },
});
</script>

<style scoped></style>

<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input
        autocomplete="off"
        v-model="email"
        type="email"
        name="email"
        value
      />

      <label for="password"> Password: </label>
      <input
        autocomplete="off"
        v-model="password"
        type="password"
        name="password"
        value
      />
      <p>{{ error }}</p>
      <button type="submit" name="button">Login</button>
    </form>
    <router-link :to="{ name: 'register' }">
      Don't have a account? Register.
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const email = ref("");
const password = ref("");
const error = ref(null);

const login = () => {
  store
    .dispatch("login", {
      email: email.value,
      password: password.value,
    })
    .then(() => {
      router.push({ name: "dashboard" });
    })
    .catch((err) => {
      error.value = err.response.data.error;
    });
};
</script>

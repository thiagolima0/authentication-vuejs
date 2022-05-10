<template>
  <div>
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input autocomplete="off" v-model="name" type="text" name="name" value />

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

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const name = ref("");
const email = ref("");
const password = ref("");
const errors = ref(null);

const register = () => {
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
};
</script>

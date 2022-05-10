<template>
  <div id="nav">
    <AppNav />
    <router-view class="page" />
  </div>
  <router-view />
</template>
<script setup lang="ts">
import AppNav from "@/components/AppNav.vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

const userString = localStorage.getItem("user");
if (userString) {
  const userData = JSON.parse(userString);
  store.commit("SET_USER_DATA", userData);
}
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch("logout");
    }
    return Promise.reject(error);
  }
);
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>

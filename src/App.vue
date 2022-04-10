<template>
  <div id="nav">
    <AppNav />
    <router-view class="page" />
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppNav from "@/components/AppNav.vue";
import store from "./store";
import axios from "axios";

export default defineComponent({
  components: { AppNav },
  created() {
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
  },
});
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

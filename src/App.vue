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

export default defineComponent({
  components: { AppNav },
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

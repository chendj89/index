<template>
  <div class="app">
    <vp-nav></vp-nav>
    <vp-slidebar></vp-slidebar>
    <vp-content :class="{ 'has-sidebar': true }"></vp-content>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
let app = getCurrentInstance();
</script>

<style scoped>
</style>
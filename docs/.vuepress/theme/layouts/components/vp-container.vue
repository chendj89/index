<template>
  <div class="vp-container">
    <vp-demo v-bind="props"></vp-demo>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  source: String,
  path: String,
  description: String
});
</script>

<style scoped>
</style>
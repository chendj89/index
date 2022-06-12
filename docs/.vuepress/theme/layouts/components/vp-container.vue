<template>
  <div class="vp-container" :data-name="path">
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
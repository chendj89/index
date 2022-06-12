<template>
  <div class="vp-container" :data-name="path">
    <vp-demo v-if="show" v-bind="props"></vp-demo>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";
const props = defineProps({
  source: String,
  path: String,
  description: String
});
const show = ref(false);
onMounted(() => {
  show.value = true;
})
</script>

<style scoped>
</style>
<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  link: string
  text: string
}>()
</script>

<template>
  <a :href="link" :title="text" target="_blank" rel="noreferrer noopener" class="social-link">
    <ElIcon v-if="icon" :size="24">
      <component :is="icon" />
    </ElIcon>
  </a>
</template>

<style scoped lang="scss">
.social-link {
  display: inline-block;
  line-height: 1.7;
  height: 24px;
  color: var(--text-color);
  margin-left: 10px;
}
</style>

<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content class="doc-content" @vnode-mounted="updateDom" @vnode-updated="updateDom"></Content>
    </div>
    <vp-toc v-if="hasHeader"></vp-toc>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePageData } from "@vuepress/client";
const page = usePageData();
const hasHeader = computed(() => {
  return page.value && page.value.headers
})
function updateDom() {

}
</script>

<style scoped>
</style>
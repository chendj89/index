<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content ref="content" class="doc-content" @vnode-mounted="updateDom" @vnode-updated="updateDom"></Content>
    </div>
    <vp-toc v-if="hasHeader"></vp-toc>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { usePageData } from "@vuepress/client";
import { insertLinkIcon, insertTableWrapper } from '@docs/.vuepress/utils';
const page = usePageData();
const hasHeader = computed(() => {
  return page.value && page.value.headers
})
const content = ref<{ $el: HTMLElement }>()
function updateDom() {
  insertLinkIcon(content)
  insertTableWrapper(content)
}
</script>

<style scoped>
</style>
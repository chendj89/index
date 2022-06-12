<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content class="doc-content" @vnode-mounted="updateDom" @vnode-updated="updateDom"></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
function updateDom() {

}
</script>

<style scoped>
</style>
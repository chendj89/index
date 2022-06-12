<script setup lang="ts">
import VpNavbar from './vp-navbar.vue'
</script>

<template>
  <header :class="{ navbar: true, 'has-sidebar': true }">
    <VpNavbar />
  </header>
</template>

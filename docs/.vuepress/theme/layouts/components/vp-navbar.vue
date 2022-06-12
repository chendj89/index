<script setup lang="ts">
import { useSiteData } from "@vuepress/client";
const siteData = useSiteData();
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="siteData.base">
          <div class="site-name"> {{ siteData.title }}</div>
        </a>
      </div>
      <div class="content">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);

  >a {
    width: 128px;
  }

  .logo {
    position: relative;
    height: 100%;
  }
}
</style>

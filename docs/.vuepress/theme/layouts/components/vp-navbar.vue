<script setup lang="ts">

</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        标题
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
    height: 28px;
    width: 128px;
  }

  .logo {
    position: relative;
    height: 100%;
  }
}
</style>

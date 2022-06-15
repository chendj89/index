<script setup lang="ts">
import GitHubIcon from '~icons/ri/github-fill'
const useSocialLinks = () => {
  return [
    {
      link: 'https://github.com',
      icon: GitHubIcon,
      text: 'GitHub',
    },
  ]
}
const links = useSocialLinks()
</script>

<template>
  <div class="social-links">
    <vp-social-link v-for="link in links" :key="link.text" v-bind="link" />
  </div>
</template>

<style scoped lang="scss">
.social-links {
  height: 24px;
  padding: 0 12px;
}
</style>

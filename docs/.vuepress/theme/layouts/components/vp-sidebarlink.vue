<script lang="ts" setup>
import { usePageData } from "@vuepress/client";
const page = usePageData();
function isActive(page: any, path: any) {
  if (path === undefined) {
    return false;
  }
  page.path = page.path.replace(".html", "");
  return page.path === path.link;
}
export type Link = {
  text: string
  link: string
  promotion?: string
  activeMatch: string
}

defineProps<{
  item: Link
}>()

defineEmits(['close'])
</script>

<template>
  <router-link :class="{
    link: true,
    active: isActive(page, item),
    'flex items-center': item.promotion,
  }" :to="item.link" @click="$emit('close')">
    <p class="link-text">{{ item.text }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.link:not(.flex) {
  display: block;
}

.link {
  padding: 10px 16px;
  line-height: 1.5;
  font-size: 0.9rem;
  border-radius: 8px;

  .link-text {
    margin: 0;
  }
}

.link:hover .link-text {
  color: var(--brand-color);
  transition: color 0.25s;
}

.link.active {
  background-color: var(--link-active-bg-color);

  .link-text {
    font-weight: 600;
    color: var(--brand-color);
    transition: color 0.25s;
  }
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-color-light);
  transition: color 0.5s;
}
</style>

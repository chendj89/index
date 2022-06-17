<script lang="ts" setup>
defineEmits(['close'])
let sidebars = [
  {
    "text": "菜单",
    "children": [
      {
        "link": "/",
        "text": "demo"
      },
      {
        "link": "/studio/vuepress",
        "text": "vuepress"
      },
      {
        "link": "/studio/icon",
        "text": "图标"
      },
      {
        "link": "/studio/vue",
        "text": "vue"
      },
      {
        "link": "/studio/webpack",
        "text": "webpack"
      },
    ]
  }
]
</script>

<template>
  <aside :class="{ sidebar: true }">
    <slot name="top" />
    <div class="sidebar-groups">
      <section v-for="(item, key) of sidebars" :key="key" class="sidebar-group">
        <p class="sidebar-group__title">
          {{ item.text }}
        </p>
        <vp-sidebarlink v-for="(child, childKey) in item.children" :key="childKey" :item="child"
          @close="$emit('close')" />
      </section>
    </div>
    <slot name="bottom" />
  </aside>
</template>

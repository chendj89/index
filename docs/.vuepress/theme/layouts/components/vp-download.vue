<template>
  <a @click="_click">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
let props = defineProps({
  href: {
    type: String,
    required: true
  }
})
const _click = () => {
  console.log(props);
  const link = document.createElement("a");
  fetch(props.href).then(res => res.blob()).then(blob => {
    link.download = "1";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)

  })

};
</script>

<style scoped>
</style>
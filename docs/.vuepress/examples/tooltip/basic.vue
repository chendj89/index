<template>
  <div>
    <el-tooltip
      effect="dark"
      :content="example.content"
      placement="top"
      :disabled="example.hide"
    >
      <div
        @click="toogleClass"
        ref="ele"
        :class="['example', { active: example.active }]"
      >
        {{ example.content }}
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
let ele = ref<HTMLElement>();
const example = reactive({
  content: "威威威威维瓦尔啊打发打发十大地方啊",
  active: false,
  hide: false,
});
onMounted(() => {
  console.log(ele.value?.offsetWidth);
  if (ele.value) {
    example.hide = ele.value?.offsetWidth > ele.value?.scrollWidth;
  }
});
let toogleClass = () => {
  example.active = !example.active;
  example.hide = !example.hide;
};
</script>

<style lang="scss" scoped>
.example {
  display: inline-block;
  padding: 5px 10px;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  // width: 120px;
  &.active {
    width: 120px;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

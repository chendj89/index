<template>
  <p class="sm" v-html="decodedDescription" />
  <div class="example">
    <div class="example-showcase">
      <component :is="props.path" v-bind="$attrs" :key="props.path" />
    </div>
    <ElDivider class="m-0" />
    <div class="op-btns">
      <ElTooltip :content="'在 Playground 中编辑'" :show-arrow="false">
        <el-icon class="op-btn" style="vertical-align: middle">
          <i-ri-flask-line />
        </el-icon>
      </ElTooltip>
      <ElTooltip :content="'在 GitHub 中编辑'" :show-arrow="false">
        <ElIcon :size="16" class="op-btn github" style="color: var(--text-color-light)">
          <a :href="'javascript:void(0);'">
            <i-ri-github-line />
          </a>
        </ElIcon>
      </ElTooltip>
      <ElTooltip :content="'复制代码'" :show-arrow="false">
        <ElIcon :size="16" class="op-btn github" style="color: var(--text-color-light)" @click="copyCode">
          <a :href="'javascript:void(0);'">
            <i-ri-file-copy-line />
          </a>
        </ElIcon>
      </ElTooltip>
      <ElTooltip :content="'查看源代码'" :show-arrow="false">
        <ElIcon :size="16" class="op-btn github" style="color: var(--text-color-light)" @click="toggleSourceVisible()">
          <a :href="'javascript:void(0);'">
            <i-ri-code-line />
          </a>
        </ElIcon>
      </ElTooltip>
    </div>
    <ElCollapseTransition>
      <vp-source-code v-show="sourceVisible" :source="source" />
    </ElCollapseTransition>
    <Transition name="el-fade-in-linear">
      <div v-show="sourceVisible" class="example-float-control" @click="toggleSourceVisible(false)">
        <ElIcon :size="16">
          <CaretTop />
        </ElIcon>
        <span>隐藏源代码</span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance } from 'vue'
import { Search, CaretTop } from '@element-plus/icons-vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
const props = defineProps({
  source: String,
  path: String,
  description: String
});

const [sourceVisible, toggleSourceVisible] = useToggle()
const decodedDescription = computed(() =>
  decodeURIComponent(props.description || '')
)
const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.source || ''),
  read: false,
})
const vm: any = getCurrentInstance();
const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error('复制出错了')
  }
  try {
    await copy()
    $message.success('复制成功')
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>


<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>

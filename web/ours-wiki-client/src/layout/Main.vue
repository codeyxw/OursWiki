<template>
  <div class="list-tool">
    <a-space>
      <a-button>
        <template #icon>
          <icon-plus />
        </template>
      </a-button>
      <a-input-search
        :style="{ width: '320px' }"
        placeholder="Please enter something"
        search-button
      />
    </a-space>
  </div>
  <router-view></router-view>
</template>
<script setup>
import { IconPlus } from '@arco-design/web-vue/es/icon';
</script>
<style scoped lang="scss">
.list-tool {
  padding: 16px;
  display: flex;
  justify-content: end;
}
</style>

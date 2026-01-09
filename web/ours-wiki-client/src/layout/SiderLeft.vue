<template>
  <a-menu>
    <a-menu-item key="1">
      <template #icon><icon-apps></icon-apps></template>
      智慧社保项目
    </a-menu-item>
    <a-menu-item key="4">
      <template #icon><icon-safe></icon-safe></template>
      自贸委项目
    </a-menu-item>
    <a-menu-item key="5">
      <template #icon><icon-fire></icon-fire></template>
      综合疏解项目
    </a-menu-item>
  </a-menu>
</template>
<script setup>
import { IconApps, IconSafe, IconFire } from '@arco-design/web-vue/es/icon';
</script>

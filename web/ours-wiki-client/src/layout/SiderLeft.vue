<template>
  <a-menu id="left-menu">
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
<style lang="scss" scoped>
#left-menu {
  height: calc(100vh - 50px - 60px);
}
</style>

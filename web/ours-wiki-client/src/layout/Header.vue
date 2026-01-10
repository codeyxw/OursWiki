<template>
  <a-menu mode="horizontal">
    <a-menu-item key="0" id="site-logo" disabled>
      <h1>{{ siteInfo.title }}</h1>
    </a-menu-item>
    <a-menu-item key="1">公共区</a-menu-item>
    <a-menu-item key="2">团队</a-menu-item>
    <a-menu-item key="2">个人</a-menu-item>
  </a-menu>
</template>
<script setup>
import { reactive } from 'vue';

const siteInfo = reactive({
  title: 'Ours Wiki',
});
</script>
<style lang="scss" scoped>
#site-logo {
  padding: 0;
  margin-right: 38px;
  h1 {
    width: 110px;
    text-indent: -999px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('@/assets/imgs/wikilogo.jpg');
  }
}
</style>

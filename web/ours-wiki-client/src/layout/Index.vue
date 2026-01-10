<template>
  <a-layout id="site-wrapper">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout id="main-content" class="container">
      <a-layout-sider>
        <SiderLeft />
      </a-layout-sider>
      <a-layout-content id="main">
        <MainContent />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>
<script setup>
import { IconApps, IconBug, IconBulb } from '@arco-design/web-vue/es/icon';
import Header from './Header.vue';
import Footer from './Footer.vue';
import SiderLeft from './SiderLeft.vue';
import MainContent from './Main.vue';
</script>
<style lang="scss" scoped>
#site-wrapper {
  min-height: 100vh;
}
#main {
  padding: 16px;
}
</style>

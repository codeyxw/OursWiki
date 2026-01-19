<template>
  <a-layout class="pub-box">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout-content>
      <div class="container">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script setup>
import Header from './Header.vue';
</script>

<style lang="scss" scoped>
.pub-box {
  height: 100vh;
  overflow: hidden;
  background-color: #f2f3f4;
}
.container {
  width: 1200px;
  margin: 16px auto 0;
}
</style>

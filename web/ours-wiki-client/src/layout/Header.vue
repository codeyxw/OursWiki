<template>
  <div class="head">
    <h1 id="site-logo">{{ siteInfo.title }}</h1>
    <div class="menu">
      <a-menu mode="horizontal">
        <a-menu-item key="1">公共区</a-menu-item>
        <a-menu-item key="2">知识库</a-menu-item>
      </a-menu>
      <a-space>
        <a-button type="primary" v-if="false">登录</a-button>
        <a-avatar :style="{ backgroundColor: '#3370ff' }">
          <IconUser />
        </a-avatar>
        <a-dropdown trigger="hover">
          <span>userName</span>
          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption>Option 2</a-doption>
            <a-doption>Option 3</a-doption>
          </template>
        </a-dropdown>
      </a-space>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { IconUser } from '@arco-design/web-vue/es/icon';

const siteInfo = reactive({
  title: 'Ours Wiki',
});
</script>
<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  #site-logo {
    margin: 10px 0;
    width: 180px;
    height: 40px;
    text-indent: -999px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('@/assets/imgs/wikilogo.jpg');
  }
  .menu {
    width: 380px;
    display: flex;
    justify-content: space-between;
  }
}
</style>

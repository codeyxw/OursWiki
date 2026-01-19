<template>
  <a-layout class="wrapper">
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider :collapsible="true" :width="240" hide-trigger :collapsed="collapsedLeft">
        <div class="filter-box" v-if="!collapsedLeft">
          <a-space>
            <a-input-search placeholder="Please enter something" />
            <a-button type="primary">
              <template #icon>
                <icon-plus />
              </template>
            </a-button>
          </a-space>
        </div>
        <SiderLeft />
        <a-button shape="circle" id="left-collapse-btn" size="mini" @click="handleCollapseLeft">
          <icon-right v-if="collapsedLeft" />
          <icon-left v-else />
        </a-button>
      </a-layout-sider>
      <a-layout-content>
        <MainContent />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import {
  IconApps,
  IconBug,
  IconBulb,
  IconLeft,
  IconRight,
  IconPlus,
} from '@arco-design/web-vue/es/icon';
import Header from './Header.vue';
import SiderLeft from './SiderLeft.vue';
import MainContent from './Main.vue';
import { ref } from 'vue';

const collapsedLeft = ref(false);
const handleCollapseLeft = () => {
  collapsedLeft.value = !collapsedLeft.value;
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
}
#left-collapse-btn {
  position: absolute;
  top: 186px;
  right: -12px;
  border: 1px solid $gray-color2;
  background-color: #fff;
  box-shadow: 0 4px 10px #0000001a;
  transition: all 0.15s;
  z-index: 9;
}
.filter-box {
  height: 50px;
  padding: 8px;
}
</style>

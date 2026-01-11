<template>
  <a-layout id="details-content">
    <a-layout-content> 详情 </a-layout-content>
    <a-layout-sider
      :collapsible="true"
      :width="180"
      :collapsed-width="0"
      hide-trigger
      :collapsed="collapsedRight"
      :class="{ 'right-sider-hide': collapsedRight, 'right-sider-show': !collapsedRight }"
    >
      <a-button shape="circle" id="right-collapse-btn-hide" size="large" @click="handleShowRight">
        <icon-right :isCollapsed="collapsedRight" />
      </a-button>
      <SiderRight />
      <a-button
        v-show="collapsedRight"
        shape="circle"
        id="right-collapse-btn-show"
        size="large"
        @click="handleShowRight"
      >
        <icon-left />
      </a-button>
    </a-layout-sider>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue';
import { IconLeft, IconRight } from '@arco-design/web-vue/es/icon';
import SiderRight from './SiderRight.vue';

const collapsedRight = ref(false);
const handleShowRight = () => {
  collapsedRight.value = !collapsedRight.value;
};
</script>
<style lang="scss" scoped>
#details-content {
  height: 100%;
}
#right-collapse-btn-hide {
  width: 36px;
  height: 36px;
  margin: 20px 0 40px 0;
}
#right-collapse-btn-show {
  position: absolute;
  top: 50px;
  left: -28px;
  width: 28px;
  height: 36px;
  background-color: #fff;
  box-shadow: -1px 0 5px #0000001a;
  border-radius: 18px 0 0 18px;
  z-index: 9;
}
.right-sider-show {
  padding: 0 16px;
}
.right-sider-hide {
  padding: 0;
}
</style>

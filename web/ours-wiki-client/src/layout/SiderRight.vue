<template>
  <div id="sider-right">
    <div id="top-contributors" class="wrapper">
      <div class="title">
        <icon-trophy class="icon" />
        <span class="text">贡献榜</span>
      </div>
      <div class="list">
        <a-list :bordered="false" :split="false">
          <a-list-item v-for="idx in 4" :key="idx">
            <a-list-item-meta title="张三" description="前端开发工程师">
              <template #avatar>
                <a-avatar shape="circle">
                  <img
                    alt="avatar"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </a-avatar>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>
<script setup>
import { IconTrophy } from '@arco-design/web-vue/es/icon';
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  .title {
    padding-bottom: 10px;
    color: $black-text-color;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $gray-color;
    .icon {
      font-size: 22px;
    }
    .text {
      margin-left: 6px;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
#sider-right {
  width: 260px;
}
</style>

<template>
  <div class="head">
    <h1 id="site-logo">{{ siteInfo.title }}</h1>
    <div class="menu">
      <ul>
        <li
          v-for="item in menuList"
          :key="item.path"
          class="menu-item"
          @click="handleChangePage(item.path)"
          :class="{ 'is-active': currentPath === item.path }"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <a-space>
        <a-button type="primary" v-if="false">登录</a-button>
        <a-dropdown trigger="hover">
          <a-avatar :style="{ backgroundColor: '#3370ff' }" :size="30">
            <IconUser />
          </a-avatar>
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
import { reactive, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IconUser } from '@arco-design/web-vue/es/icon';

const route = useRoute();
const router = useRouter();

const currentPath = computed(() => route.path);

const siteInfo = reactive({
  title: 'Ours Wiki',
});

const menuList = reactive([
  {
    name: '公共区',
    path: '/public',
  },
  {
    name: '知识库',
    path: '/list',
  },
]);

const handleChangePage = (path) => {
  router.push(path);
};
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
    display: flex;
    justify-content: space-between;
    ul {
      margin: 0;
      display: flex;
      justify-content: space-between;
      .menu-item {
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 22px;
        cursor: pointer;
        &.is-active {
          color: #3370ff;
          border-bottom: 2px solid #3370ff;
          box-sizing: border-box;
          span {
            margin-bottom: -2px;
          }
        }
      }
    }
  }
}
li {
  list-style: none;
}
</style>

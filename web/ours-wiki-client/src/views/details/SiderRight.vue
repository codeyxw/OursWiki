<template>
  <a-tree
    :data="treeData"
    id="right-tree"
    :block-node="true"
    :style="{ overflow: props.isCollapsed ? 'hidden' : 'auto' }"
  />
</template>
<script setup>
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false,
  },
});
const treeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Branch 0-0-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'Leaf',
            key: '0-0-0-0',
          },
          {
            title: 'Leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'Branch 0-0-1asdasdasdasdadasdasdas',
        key: '0-0-1',
        children: [
          {
            title: 'Leaf',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: 'Branch 0-0-1asdasdasdasdadasdasdas',
        key: '0-0-1',
        children: [
          {
            title: 'Leaf',
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];
</script>
<style lang="scss" scoped>
#right-tree {
  width: 100%;
  height: calc(100vh - 168px);
}
</style>

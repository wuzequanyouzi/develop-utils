<template>
  <div class="menu-wrap">
    <div
      class="menu-item"
      v-for="item in menu"
      :key="item.key"
      @click="$router.push(item.path)"
    >
      <i></i>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menu = ref([
  {
    path: '/',
    name: '首页',
    key: 'home',
    icon: 'home'
  },
  {
    path: '/records',
    name: '归档',
    key: 'records',
    icon: 'records'
  },
  {
    path: '/category',
    name: '分类',
    key: 'category',
    icon: 'category'
  }
])

</script>

<style lang="scss" scoped>
.menu-wrap {
  display: flex;
  align-items: center;
  user-select: none;
  .menu-item {
    margin-right: 10px;
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      opacity: 0;
      width: 100%;
      height: 2px;
      background-color: brown;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
}

</style>

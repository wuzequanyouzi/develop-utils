<template>
  <div class="menu-wrap">
    <div
      class="menu-item"
      :class="{ active: item.active }"
      v-for="item in menu"
      :key="item.key"
      @click="$router.push(item.path)"
    >
      <i></i>
      <span class="menu-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, defineEmits } from 'vue';
import { useRoute } from 'vue-router';

const emit = defineEmits(['currentRouteName']);

const menu = ref([
  {
    path: '/',
    name: '🏠 首页',
    key: 'home',
    icon: 'home',
    active: false
  },
  {
    path: '/records',
    name: '📅 归档',
    key: 'records',
    icon: 'records',
    active: false
  },
  {
    path: '/tools',
    name: '📂 小工具',
    key: 'tools',
    icon: 'tools',
    active: false
  }
])
const route = useRoute();

watchEffect(() => {
  menu.value.forEach((item) => {
    if (item.key === route.name?.toLowerCase()) {
      emit('currentRouteName', route.name);
      item.active = true;
    } else {
      item.active = false;
    }
  })
})


</script>

<style lang="scss" scoped>
.menu-wrap {
  display: flex;
  align-items: center;
  user-select: none;
  .menu-item {
    margin-right: 14px;
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
    .menu-name {
      font-size: 14px;
    }
  }
  .active {
    &::after {
      opacity: 1;
    }
  }
}

</style>

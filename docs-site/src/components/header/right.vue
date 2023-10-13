<template>
  <div class="header-right">
    <el-input
      class="search-input"
      :class="{ hidden: !isShow }"
      v-model="searchKey"
      size="default"
      placeholder="搜索文章"
      :suffix-icon="Search"
    />
    <Menu @currentRouteName="handleRouteName"/>
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import Menu from "./menu.vue";
import useSearch from '../../hooks/search';
import { ref } from 'vue';
const { searchKey } = useSearch();
const isShow = ref(true);
const handleRouteName = (routeName) => {
  isShow.value = routeName === 'Home';
}
</script>

<style lang="scss" scoped>
.header-right {
  display: flex;
  align-items: center;
}
.search-input {
  width: 200px;
  margin-right: 20px;
}
.hidden {
  display: none;
}
</style>

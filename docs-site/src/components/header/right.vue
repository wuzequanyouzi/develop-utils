<template>
  <div class="header-right">
    <el-input
      class="search-input"
      v-model="searchKey"
      size="default"
      placeholder="搜索文章"
      :suffix-icon="Search"
    />
    <Menu />
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import Menu from "./menu.vue";
import useSearch from '../../hooks/search';
const { searchKey } = useSearch();
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
</style>

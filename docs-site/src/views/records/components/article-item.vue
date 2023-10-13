<!--
 * @Author: zequan.wu
 * @Date: 2023-10-10 15:02:20
 * @LastEditors: zequan.wu
 * @LastEditTime: 2023-10-11 10:04:36
 * @FilePath: \develop-utils\docs-site\src\views\records\components\article-item.vue
 * @Description: 
 * 
-->
<template>
  <div class="data">{{ recordItem.data }}</div>
  <ul class="record-item-list">
    <li class="item" v-for="item in recordItem.list" @click="$router.push({ name: 'Docs', params: { id: item.id } })">
      <span class="title">{{ item.title }}</span>
      <span class="time">{{ item.time }}</span>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  recordItem: {
    type: Object,
    default: () => ({
      data: "",
      list: [],
    }),
  },
});
</script>

<style lang="scss" scoped>
.data {
  font-size: 16px;
  font-weight: 600;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  color: #3b434b;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}
.record-item-list {
  font-style: italic;
  font-size: 14px;
  color: #2196f3;
  .item {
    display: flex;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .title {
    font-weight: 600;
    flex: 1;
}
  .time {
    margin-left: auto;
  }
}
</style>

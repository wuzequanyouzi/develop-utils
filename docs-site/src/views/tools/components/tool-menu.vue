<template>
  <div class="tool-menu__wrap">
    <div class="tool-menu__one" v-for="item in menu" :key="item.key">
      <p class="one-title">{{ item.name }}</p>
      <div
        class="tool-menu__two"
        v-for="child in item.children"
        :key="child.key"
      >
        {{ child.name }}
      </div>
    </div>
  </div>
</template>

<script name="ToolMenu" setup>
import { ref } from "vue";
const menu = ref([
  {
    key: "1",
    name: "工具型",
    children: [
      {
        key: "edit-text",
        name: "可编辑tag文本框",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.tool-menu__wrap {
  font-family: Quotes, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  width: 190px;
  padding-right: 10px;
  .tool-menu__one {
    margin-bottom: 10px;
    .one-title {
      font-weight: 600;
      margin-bottom: 5px;
    }
    .tool-menu__two {
      padding: 4px 0;
      margin-bottom: 2px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
  }
}
</style>

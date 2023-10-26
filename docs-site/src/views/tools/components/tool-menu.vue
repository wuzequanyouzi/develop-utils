<!--
 * @Author: zequan.wu
 * @Date: 2023-10-13 10:11:50
 * @LastEditors: zequan.wu
 * @LastEditTime: 2023-10-26 15:56:04
 * @FilePath: \develop-utils\docs-site\src\views\tools\components\tool-menu.vue
 * @Description: 
 * 
-->
<template>
  <div class="tool-menu__wrap">
    <div class="tool-menu__one" v-for="item in menu" :key="item.key">
      <p class="one-title">{{ item.name }}</p>
      <div
        class="tool-menu__two"
        v-for="child in item.children"
        :key="child.key"
        @click="handleClick(child)"
      >
        {{ child.name }}
      </div>
    </div>
  </div>
</template>

<script name="ToolMenu" setup>
import { ref, defineAsyncComponent, defineEmits } from "vue";
const emit = defineEmits(['menu-click'])
const menu = ref([
  {
    key: "1",
    name: "工具型",
    children: [
      {
        key: "edit-text",
        name: "可编辑tag文本框",
        component: () => import('./tool-content/edit-text/index.vue'),
      },
      {
        key: "transition-auto-height",
        name: "高度过渡动画",
        component: () => import('./tool-content/transition-auto-height/index.vue'),
        props: [
          {
            time: 800,
            content: `西风烈，
长空雁叫霜晨月。
霜晨月，
马蹄声碎，
喇叭声咽。
雄关漫道真如铁，
而今迈步从头越。
从头越，
苍山如海，
残阳如血。`
          },
          {
            time: 1200,
            content: `红军不怕远征难，
万水千山只等闲。
五岭逶迤腾细浪，
乌蒙磅礴走泥丸。
金沙水拍云崖暖，
大渡桥横铁索寒。
更喜岷山千里雪，
三军过后尽开颜。`
          },
          {
            time: 500,
            content: `
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

            `
          }
        ]
      },
    ],
  },
]);

const handleClick = (child) => {
  emit('menu-click', child);
}
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

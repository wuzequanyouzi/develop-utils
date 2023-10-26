<!--
 * @Author: zequan.wu
 * @Date: 2023-10-08 10:18:57
 * @LastEditors: zequan.wu
 * @LastEditTime: 2023-10-26 15:49:49
 * @FilePath: \develop-utils\docs-site\src\views\tools\index.vue
 * @Description: 
 * 
-->
<template>
  <div class="tool-wrap">
    <ToolMenu @menu-click="handleClick"/>
    <div class="right-content">
      <component v-for="item in props" :is="activeComponent" v-bind="item" ></component>
    </div>
  </div>
</template>

<script name="Tools" setup>
import ToolMenu from "./components/tool-menu";
import EditText from "./components/tool-content/edit-text";
import { ref, shallowRef, defineAsyncComponent } from "vue";
const activeComponent = shallowRef(EditText);
const props = ref([{}]);

const handleClick = (menuItem) => {
  activeComponent.value = defineAsyncComponent(menuItem.component);
  props.value = menuItem?.props || [{}];
}
</script>
<style>
body {
  height: 100vh;
}
</style>
<style lang="scss" scoped>
.tool-wrap {
  display: flex;
  .right-content {
    flex: 1;
    background-color: #2196f3;
    display: flex;
  }
}
</style>

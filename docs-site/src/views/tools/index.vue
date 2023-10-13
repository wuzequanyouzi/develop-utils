<template>
  <div class="tool-wrap">
    <ToolMenu />
    <div class="right-content">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script name="Tools" setup>
import ToolMenu from "./components/tool-menu";
import EditText from "./components/tool-content/edit-text";
import { ref } from "vue";
const activeComponent = EditText;
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
  }
}
</style>

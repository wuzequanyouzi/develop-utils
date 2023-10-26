<!--
 * @Author: zequan.wu
 * @Date: 2023-10-26 11:27:38
 * @LastEditors: zequan.wu
 * @LastEditTime: 2023-10-26 15:58:21
 * @FilePath: \develop-utils\docs-site\src\views\tools\components\tool-content\transition-auto-height\index.vue
 * @Description: 
 * 
-->
<template>
  <div
    class="transition-auto-height__wrap"
    :class="{ 'webkit-box': hasWebkit }"
    ref="domRef"
    @mouseover="handleOver"
    @mouseout="handleOut"
  >
    {{ content }}
  </div>
</template>

<script setup>
import { ref, defineProps, computed, nextTick } from "vue";
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  maxHeight: {
    type: Number,
    default: 60,
  },
  time: {
    type: Number,
    default: 1000,
  }
});

const hasWebkit = ref(true);
const height = ref(0);
const domRef = ref(null);
const isOver = ref(false);

const _maxHeight = computed(() => {
  return (height.value || props.maxHeight) + 'px';
})
const _cssTime = computed(() => {
  return props.time / 1000 + 's';
})

const handleOver = () => {
  hasWebkit.value = false;
  isOver.value = true;
  nextTick(() => {
    height.value = domRef.value.scrollHeight;
  })
};
let timeout = null;
const handleOut = () => {
  height.value = 0;
  isOver.value = false;
  timeout =  setTimeout(() => {
    if (!isOver.value) {
      hasWebkit.value = true;
    } else {
      clearTimeout(timeout);
    }
  }, props.time);
}
</script>

<style lang="scss" scoped>
.transition-auto-height__wrap {
  margin-right: 10px;
  display: block;
  background-color: #ddd;
  width: 200px;
  transition: max-height v-bind(_cssTime) ease;
  overflow: hidden;
  will-change: max-height;
  white-space: break-spaces;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: v-bind('_maxHeight');
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}
.webkit-box {
  display: -webkit-box;
}
</style>

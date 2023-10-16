<template>
  <div class="tag-wrap" :data-param-name="tagItem.id">
    <span>🎐</span>
    <span>{{ tagItem.name }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  tagItem: {
    type: Object,
    default: () => ({
      name: '',
      id: '',
    })
  }
})
</script>

<style lang="scss" scoped>
.tag-wrap {
  border: 1px solid #ccc;
  padding: 0 4px 0 0;
  border-radius: 4px;
  color: #666;
}
</style>
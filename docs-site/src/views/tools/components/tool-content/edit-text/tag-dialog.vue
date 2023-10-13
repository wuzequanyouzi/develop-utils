<template>
  <div class="tag-dialog__wrap" v-show="modelValue">
    <div class="tag-dialog__header">
      <span>选择标签</span>
      <span class="close" @click="$emit('update:modelValue', false)">×</span>
    </div>
    <div class="tag-dialog__content">
      <p class="tag-dialog__title">选择下列塑造者</p>
      <div class="tag-list">
        <p class="tag-item" v-for="tag in tagList" :key="tag.id" @click="handleClick(tag)">
          {{ tag.name }} <span>( {{ tag.id }} )</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script name="TagDialog" setup>
import { ref, defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["input", "update:modelValue"]);

const tagList = ref([
  {
    id: "be_strong",
    name: "成为强者时",
  },
  {
    id: "be_loser",
    name: "退回弱者时",
  },
  {
    id: "becoming_oneself",
    name: "成为自己时",
  },
]);

const handleClick = (tag) => {
  emit("input", tag);
}

</script>

<style lang="scss" scoped>
.tag-dialog__wrap {
  user-select: none;
  position: absolute;
  transform: translateX(-102%);
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 6px;
  padding: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  color: #444;
  .tag-dialog__header {
    padding: 4px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close {
      font-size: 20px;
      cursor: pointer;
    }
  }
  .tag-dialog__content {
    margin-top: 10px;
    padding: 0 8px;
    .tag-dialog__title {
      font-size: 14px;
      margin-bottom: 4px;
    }
    .tag-list {
      height: 300px;
      overflow-y: auto;
      .tag-item {
        cursor: pointer;
        padding: 4px 18px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        &:hover {
          background-color: #f5f5f5;
        }
        &:active {
          background-color: #e6e6e6;
        }
        span {
          color: #999;
        }
      }
    }
  }
}
</style>

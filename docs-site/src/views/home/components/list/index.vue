<template>
  <div class="list-wrap">
    <el-card
      v-for="(word, index) in list"
      :key="index"
      class="item-wrap"
      @click="handleClick(word)"
    >
      <div class="item-content">
        <div class="item-left">
          <div class="title">{{ word.title }}</div>
          <div class="desc">{{ word.desc }}</div>
        </div>
        <div class="item-right">{{ word.time }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  // 列表数据
  list: {
    type: Array,
    default: () => [],
  },
});
const router = useRouter();

const handleClick = (word) => {
  router.push({
    name: "Docs",
    params: {
      id: word.id,
    },
  });
};
</script>

<style lang="scss" scoped>
.list-wrap {
  margin-top: 20px;
  max-width: 1000px;
  .item-wrap {
    margin-bottom: 20px;
    min-height: 120px;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:nth-child(odd) {
      &::before {
        content: "";
        display: block;
        width: 50%;
        padding: 40% 0 0;
        top: -100%;
        left: -10%;
        z-index: 0;
        transform: rotate(-45deg);
        position: absolute;
        background-color: #f89898;
      }
    }
    &:nth-child(even) {
      &::before {
        content: "";
        display: block;
        width: 50%;
        padding: 40% 0 0;
        top: -100%;
        right: -10%;
        z-index: 0;
        transform: rotate(-45deg);
        position: absolute;
        background-color: #a0cfff;
      }
    }
  }
  .item-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    padding: 2px 4px;
    .item-left {
      flex: 1;
      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .desc {
        margin-top: 8px;
        font-size: 12px;
				-webkit-box-orient: vertical;
				text-overflow: ellipsis;
				overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
      }
    }
    .item-right {
      margin-left: 8px;
      font-size: 14px;
      color: #999;
      width: 80px;
    }
  }
}
</style>

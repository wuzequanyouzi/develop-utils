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
          <div>{{ word.title }}</div>
          <div class="desc">{{ word.desc }}</div>
        </div>
        <div class="item-right">{{ word.time }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router';
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
    name: 'Docs',
    params: {
      id: word.id,
    }
  })
}

</script>

<style lang="scss" scoped>
.list-wrap {
  margin-top: 20px;
  max-width: 1000px;
  .item-wrap {
    margin-bottom: 20px;
    min-height: 120px;
    cursor: pointer;
  }
  .item-content {
    display: flex;
    justify-content: space-between;
    .item-left {
      font-size: 16px;
      .desc {
        font-size: 12px;
      }
    }
    .item-right {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>

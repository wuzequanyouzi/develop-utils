<template>
  <div class="records">
    <div class="title">📅 归档</div>
    <p class="desc">天台四万八千丈，对此欲倒东南倾</p>
    <div class="record-list" v-for="(record, index) in records" :key="index">
      <ArticleItem :record-item="record" />
    </div>
  </div>
</template>

<script name="Records" setup>
import ArticleItem from "./components/article-item.vue";
import { records } from "../../article";
</script>

<style lang="scss" scoped>
.records {
  width: 720px;
  margin: 0 auto;
  .title,
  .desc {
    text-align: center;
  }
  .title {
    font-size: 20px;
  }
  .desc {
    margin-top: 4px;
    font-style: italic;
    color: #000000a6;
    font-size: 14px;
  }
  .record-list {
    margin-bottom: 10px;
  }
}
</style>

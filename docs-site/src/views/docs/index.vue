<template>
  <div class="docs-content markdown-body">
    <h1>{{ title }}</h1>
    <Test />
  </div>
</template>

<script setup>
import "highlight.js/styles/github.css";
import "../../styles/markdown.scss";
import { useRoute } from "vue-router";
import articleInfo from "../../article";
import { defineAsyncComponent, ref } from "vue";
import NotData from "../../components/not-data/index.vue";

const route = useRoute();
const currentArticle = articleInfo.find(
  (item) => item.id === Number(route.params.id)
);

const title = ref(currentArticle?.title || '')

const Test = currentArticle?.component ? defineAsyncComponent(currentArticle.component) : NotData;
</script>

<style lang="scss" scoped>
.docs-content {
  width: 800px;
  margin: 0 auto;
  ::v-deep pre {
    line-height: 1.5;
    background-color: var(--el-color-info-light-7);
    padding: 10px;
    border-radius: 4px;

  }
}
</style>

<style lang="scss">

div[class*=language-] {
}
</style>
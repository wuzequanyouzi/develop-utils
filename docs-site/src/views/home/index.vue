<template>
  <div class="home-wrap">
    <div class="img-wrap">
      <div class="img-background" />
      <p class="title"> 雄关漫道真如铁，而今迈步从头越 </p>
    </div>
    <div class="content">
      <List class="content-left" :list="articleList"/>
      <Author class="content-right"/>
    </div>
  </div>
</template>

<script name="Home" setup>
import List from './components/list/index.vue';
import Author from './components/author/index.vue';
import article from '../../article/index.js';
import useSearch from '../../hooks/search';

import { watch, ref } from 'vue';

const articleList = ref([...article]);

const { searchKey } = useSearch();

watch(searchKey, () => {
  if (searchKey.value) {
    articleList.value = article.filter(item => item.title.includes(searchKey.value));
  } else {
    articleList.value = [...article];
  }
})

</script>

<style lang="scss" scoped>
.home-wrap {
  .img-wrap {
    position: absolute;
    left: 0;
    width: 100%;
    height: 500px;
    .img-background {
      width: 100%;
      height: 100%;
      background: linear-gradient(transparent 45%, white), url(../../assets/imgs/star.webp);
      

    }
    .title {
      position: absolute;
      top: 40%;
      left: 50%;
      font-size: 30px;
      color: #eee;
      transform: translate(-50%,-50%);
      font-family: cursive;
    }
  }
  .content {
    position: relative;
    z-index: 10;
    padding-top: 400px;
    display: flex;
    .content-left {
      flex: 1;
      margin-right: 100px;
    }
    .content-right {
      margin-top: 20px;
      margin-left: auto;
    }
  }
}
</style>

<template>
  <div class="home-wrap">
    <div class="img-wrap">
      <div class="img-background" />
      <p class="title"> 雄关漫道真如铁，而今迈步从头越 </p>
    </div>
    <div class="content">
      <List class="content-left" :list="article"/>
      <div class="content-right">描述块</div>
    </div>
  </div>
</template>

<script name="Home" setup>
import List from './components/list/index.vue';
import article from '../../article/index.js';
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
      top: 35%;
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
      width: 200px;
      height: 400px;
      margin-left: auto;
    }
  }
}
</style>

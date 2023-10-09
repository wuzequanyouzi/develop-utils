<template>
  <div class="header-wrap">
    <Left />
    <Right />
  </div>
</template>

<script setup>
import Left from './left.vue';
import Right from './right.vue';

</script>

<style lang="scss" scoped>
.header-wrap {
  box-sizing: border-box;
  width: 100vw;
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10;
}
</style>
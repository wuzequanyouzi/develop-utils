<template>
  <Header />
  <Content>
    <router-view></router-view>
  </Content>
</template>

<script>
import Header from './components/header';
import Content from './components/content';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html,body {
  overflow-x: hidden;
}
html,body,p,div,span,#app {
  margin: 0;
  padding: 0;
}
</style>

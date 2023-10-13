<template>
  <div>
    123
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
</style>
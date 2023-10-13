<template>
  <div class="edit-text__wrap">
    <TagDialog v-model="isShow" @input="handleInput"/>
    <InputTag ref="inputTagRef" @focus="handleFocus" @blur="handleBlur"/>
  </div>
</template>

<script name="EditText" setup>
import TagDialog from './tag-dialog.vue';
import InputTag from './input-tag.vue';
import { ref } from 'vue';

const isShow = ref(false);
const inputTagRef = ref(null);

const handleInput = (value) => {
  inputTagRef.value.addTag(value);
}

const handleFocus = () => {
  isShow.value = true;
}
const handleBlur = () => {
  isShow.value = false;
}
</script>

<style lang="scss" scoped>
.edit-text__wrap {
  position: relative;
}
</style>
<template>
  <div
    :id="containerId"
    class="input-tag"
    contenteditable="true"
    ref="inputTag"
    @focus="handleFocus"
    @blur="handleBlur"
  ></div>
</template>

<script name="EditText" setup>
import {
  ref,
  createApp,
  defineEmits,
  defineExpose,
  onMounted,
  onUnmounted,
} from "vue";
import Tag from "./tag.vue";

const emit = defineEmits(["focus", "blur"]);

const containerId = `input-tag-${Math.random().toString()}-${Date.now()}`;

const inputTag = ref(null);
const range = ref(null);
window.range = range;

// 获取光标位置对象
const handleSelection = () => {
  const selection = window.getSelection();
  if (selection?.focusNode?.id === containerId || selection?.focusNode?.parentNode?.id === containerId) {
    range.value = selection.getRangeAt(0);
  }
};

// 聚焦
const handleFocus = () => {
  emit("focus");
};
// 失焦
const handleBlur = (e) => {};

// 更新文本
const updateText = (str) => {};

// 创建标签
const createTag = (tag) => {
  const documentFragement = document.createDocumentFragment();
  const tagNode = document.createElement("param-tag");
  tagNode.classList.add("param-tag");
  const tagInstance = createApp(Tag, { tagItem: tag });
  const textNode = document.createTextNode(" ");
  tagInstance.mount(tagNode);
  documentFragement.append(tagNode);
  documentFragement.append(textNode);

  return {documentFragement, textNode};
};

// 插入标签
const insertTag = ({ documentFragement, textNode }) => {
  if (range.value) {
    console.log(range.value)
    range.value.deleteContents();
    range.value.insertNode(documentFragement);
    range.value.setStart(textNode, 1);
  }
};

// 添加标签到inputtag
const addTag = (tag) => {
  const documentFragement = createTag(tag);
  insertTag(documentFragement)
};

// 文本转译
const textTransfer = (text) => {};

// 标签解析
const tagParse = (text) => {};

// 导出
defineExpose({
  addTag,
});

onMounted(() => {
  document.addEventListener("selectionchange", handleSelection);
});

onUnmounted(() => {
  document.removeEventListener("selectionchange", handleSelection);
});
</script>

<style lang="scss" scoped>
.input-tag {
  user-select: none;
  margin: 4px;
  width: 400px;
  min-height: 30px;
  transition: all 0.3s;
  outline: none;
  -webkit-user-modify: read-write-plaintext-only !important;
  overflow: auto;
  box-sizing: border-box;
  word-break: break-word;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 0 10px;
  line-height: 32px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  ::v-deep .param-tag {
    height: 22px;
    border-radius: 25px;
    opacity: 1;
    border: 1px solid #2f5b9e;
    background-color: #fff;
    margin: 0 4px;
    cursor: default;
    -webkit-user-modify: read-only !important;
    color: #333;
    display: inline-block;
    line-height: 22px;
  }
}
</style>

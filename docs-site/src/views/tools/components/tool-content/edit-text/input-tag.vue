<template>
  <div
    :id="containerId"
    class="input-tag"
    contenteditable="true"
    ref="inputTag"
    @focus="handleFocus"
    @blur="handleBlur"
  ></div>
  <el-button
      type="primary"
      text
      bg
      @click="handleGetText"
      >获取模板</el-button>
  <div class="text" style="white-space: pre-wrap;" v-html="textStr"></div>
</template>

<script name="EditText" setup>
import {
  ref,
  createApp,
  defineEmits,
  defineExpose,
  onMounted,
  onUnmounted,
  nextTick,
} from "vue";
import Tag from "./tag.vue";
import tagListSource, { textSource } from "./tag-list";

const emit = defineEmits(["focus", "blur"]);

const containerId = `input-tag-${
  Math.random().toString().split(".")[1]
}-${Date.now()}`;

const paramsRegex = new RegExp(
  `{{(${tagListSource.map((item) => item.id).join("|")})}}`,
  "g"
);
const tagNodeRegex = /<param-tag .*?>.*?data-param-name="([^"]*)".*?<\/param-tag>/g;


const inputTag = ref(null);
const range = ref(null);
const textStr = ref("");

// 获取光标位置对象
const handleSelection = () => {
  const selection = window.getSelection();
  if (
    selection?.focusNode?.id === containerId ||
    selection?.focusNode?.parentNode?.id === containerId
  ) {
    console.log(selection);
    range.value = selection.getRangeAt(0);
    console.log(range.value);
  }
};

// 聚焦
const handleFocus = () => {
  emit("focus");
};
// 失焦
const handleBlur = (e) => {};

const handleGetText = () => {
  tagParse(inputTag.value.innerHTML);
}

// 更新文本
const updateText = (str) => {
  let match,
    lastIndex = 0;
  const result = [];
  while ((match = paramsRegex.exec(str)) !== null) {
    const paramStr = match[0];
    const paramName = match[1];
    const beforeContent = str.substring(lastIndex, match.index);
    if (beforeContent.length > 0) {
      result.push(beforeContent);
    }
    lastIndex = paramsRegex.lastIndex;
    result.push({
      id: paramName,
    });
  }
  if (lastIndex < str.length) {
    result.push(str.substring(lastIndex, str.length));
  }
  const documentFragement = document.createDocumentFragment();
  result.forEach((item) => {
    if (typeof item === "string") {
      documentFragement.appendChild(document.createTextNode(item));
    } else {
      const findTag = tagListSource.find((tag) => tag.id === item.id);
      if (findTag) {
        const { documentFragement: documentFragementByTag } =
          createTag(findTag);
        documentFragement.appendChild(documentFragementByTag);
      }
    }
  });

  const inputTagDom = document.querySelector(`#${containerId}`);
  inputTagDom.append(documentFragement);
};

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

  return { documentFragement, textNode };
};

// 插入标签
const insertTag = ({ documentFragement, textNode }) => {
  console.log(range.value);
  if (range.value) {
    range.value?.deleteContents?.();
    range.value?.insertNode?.(documentFragement);
    range.value?.setStart?.(textNode, 1);
  }
};

// 添加标签到inputtag
const addTag = (tag) => {
  const documentFragement = createTag(tag);
  insertTag(documentFragement);
};

// 文本转译
const textTransfer = (text) => {};

// 标签解析
const tagParse = (text) => {
  const matches = text.matchAll(tagNodeRegex);
  let result = text;
  for (const match of matches) {
    const fullMatch = match[0];
    const paramName = match[1];
    result = result.replace(
      `${fullMatch} `,
      `{{${paramName}}}`
    );
  }
  textStr.value = result;
  console.log(result)
};

// 导出
defineExpose({
  addTag,
});

onMounted(() => {
  document.addEventListener("selectionchange", handleSelection);

  updateText(textSource);
});

onUnmounted(() => {
  document.removeEventListener("selectionchange", handleSelection);
});
</script>

<style lang="scss" scoped>
.input-tag {
  user-select: none;
  margin: 4px;
  width: 440px;
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
    background-color: #fff;
    margin: 0 4px;
    cursor: default;
    -webkit-user-modify: read-only !important;
    color: #333;
    display: inline-block;
    line-height: 22px;
  }
}
.text {
  background-color: #fff;
  margin: 4px;
  width: 440px;
  padding: 10px;
  border-radius: 6px;
}
</style>

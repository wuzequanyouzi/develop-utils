module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: 'babel-eslint',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: "vue-eslint-parser",
  rules: {
    "vue/multi-word-component-names": "off",
  },
};

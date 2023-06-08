import ComponentOne from './index.vue';

ComponentOne.install = function (Vue) {
  Vue.component(ComponentOne.name, ComponentOne);
};

export default ComponentOne;

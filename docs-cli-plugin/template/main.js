import Vue from 'vue'
    import './style.css'
    import 'highlight.js/styles/github.css';
    import md from 'D:\\study\\develop-utils\\test-components\\packages\\component-one\\README.md'
    new Vue({
      render: h => h(md),
    }).$mount('#app')
    
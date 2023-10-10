export default [
  {
    title: '从零实现属于自己的前端脚手架',
    component: () => import('./list/04.md'),
    time: '2022-08-14',
    desc: '对于前端开发，前端脚手架是伴随前端工程化发展而产生的，通过选择几个选项快速搭建项目基础代码的工具。它可以有效避免我们ctrl + c/v。',
    id: 3,
  },
  {
    title: '腾讯开源插件Puerts，用Typescript编写Unity3D脚本',
    component: () => import('./list/03.md'),
    time: '2022-08-14',
    desc: '官方给了Demopuerts_unity_demo,可以直接用官方的Demo来初始化项目；如果是从unity hub 直接创建的化，官方文档好像没有这部分的指引；于是我结合了......',
    id: 3,
  },
  {
    title: 'Cesium 导航罗盘',
    component: () => import('./list/02.md'),
    time: '2021-07-22',
    desc: '之前在搞智慧城市，项目的3D地图页面是第三方提供的，产品经理老过来提3D地图的需求，搞得我三天两头就对接第三方，第三方以这没办法做、那性能不行等理由搪塞（还没给钱，不做）。没办法自己......',
    id: 2,
  },
  {
    title: 'Cesium加载大量Label实体时卡顿的一种解决方法',
    component: () => import('./list/01.md'),
    time: '2021-04-08',
    desc: '笔者接触CesiumJS是由于公司项目需要，直接边学边开发，两三个月来都挺顺风顺水的。直到数据量越来越大，地图上的实体越来越多，首屏加载的时候经常会卡顿，客户那边的机器性能太差，有时候卡顿的同时还出现浏览器无响应问题。测试把这个问题归为BUG，要求必须解决，搞得我头大。',
    id: 1,
  }
];

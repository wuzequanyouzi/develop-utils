const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const anchor = require('markdown-it-anchor')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/develop-utils" : "/",
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)

      .use('vue-loader')
      .loader('vue-loader')
      .end()

      .use('vue-md-loader')
      .loader('vue-md-loader')
      .options({
        plugins: [
          [
            anchor,
            {
              // permalink: anchor.permalink.headerLink(),
            },
          ],
        ],
      })
      .end()
  },
})

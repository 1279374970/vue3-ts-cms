/*
 * @Author: daming 1279374970@qq.com
 * @Date: 2023-12-09 16:57:48
 * @LastEditors: daming 1279374970@qq.com
 * @LastEditTime: 2023-12-12 01:11:51
 * @FilePath: \vue-ts-cms\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path")
const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
	transpileDependencies: true,
  outputDir: "files",
  chainWebpack: (config) => {
    config.resolve.alias.set('@',path.resolve(__dirname , "src")).set('components',path.resolve(__dirname, "@/components")
    )
  }
})

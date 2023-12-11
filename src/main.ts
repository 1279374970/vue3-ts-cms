/*
 * @Author: daming 1279374970@qq.com
 * @Date: 2023-12-09 16:57:48
 * @LastEditors: daming 1279374970@qq.com
 * @LastEditTime: 2023-12-11 23:29:12
 * @FilePath: \vue-ts-cms\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

createApp(App).use(store).use(router).mount("#app")

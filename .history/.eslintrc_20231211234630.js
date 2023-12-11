/*
 * @Author: daming 1279374970@qq.com
 * @Date: 2023-12-09 16:57:48
 * @LastEditors: daming 1279374970@qq.com
 * @LastEditTime: 2023-12-11 23:46:25
 * @FilePath: \vue-ts-cms\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended"],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	}
}

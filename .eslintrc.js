module.exports = {
  root: true,
  env: {
    node: true,
    browser: true // 👈 建议加上，因为是 Web 项目
  },
  extends: [
    'plugin:vue/vue3-essential', // 或 vue3-essential
    '@vue/typescript/recommended',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off'
  }
}

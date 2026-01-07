module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential', // Vue 2 推荐规则（也可用 'plugin:vue/recommended'）
    '@vue/prettier' // 👈 关键：替换 '@vue/standard' 为 '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint', // Vue CLI 4 默认使用 babel-eslint
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Prettier 会处理函数括号空格，所以可以安全关闭 ESLint 的相关规则
    'space-before-function-paren': 'off'
  }
}

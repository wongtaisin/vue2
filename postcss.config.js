const path = require('path')

module.exports = ctx => {
  // 尝试从 ctx.file 获取路径（兼容旧版）
  const filePath = ctx.file?.dirname || ''
  const isVant = filePath.includes('node_modules' + path.sep + 'vant')

  const designWidth = isVant ? 375 : 750

  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: designWidth,
        unitToConvert: 'px',
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['.ignore'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 1628
      }
    }
  }
}

const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}
const replaceReg = (value) => {
  return value.replace(/^\D*([0-9]\d*\.?\d{0,4})?.*$/, '$1')
}
export default {
  // 判断是否为数字并且小于7位数
  number: {
    bind: function (el) {
      const input = el.querySelectorAll('input')[0] || el
      if (!input && input !== 0) return
      const inputFn = function (e) {
        input.value = replaceReg(input.value)
        if (input.value > 999999) input.value = input.value.slice(0, 6)
        if (input.value === 'undefined') input.value = ''
        trigger(input, 'input')
      }
      input.onkeyup = inputFn
      input.onblur = inputFn
    }
  },
  // 验证1-100的数字
  discountRate: {
    bind: function (el) {
      const input = el.querySelectorAll('input')[0] || el
      if (!input && input !== 0) return
      const inputFn = function (e) {
        input.value = replaceReg(input.value)
        if (input.value > 100) input.value = 100
        trigger(input, 'input')
      }
      input.onkeyup = inputFn
      input.onblur = inputFn
    }
  }
}

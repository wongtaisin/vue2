export default {
  deepCopy(data) {
    return window.JSON.parse(window.JSON.stringify(data))
  }
}

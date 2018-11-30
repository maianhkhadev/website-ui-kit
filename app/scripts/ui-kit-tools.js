if(window.uiKit === undefined) {
  window.uiKit = {}
}

window.uiKit.element = {}
window.uiKit.element.getComputedStyle = function(element, styleName) {
  let computedStyle = window.getComputedStyle(element)

  switch (styleName) {
    case 'line-height':
      let computedValue = computedStyle.getPropertyValue(styleName)

      if(computedValue === 'normal') {
        computedValue = computedStyle.getPropertyValue('font-size')
      }
      
      let valueStr = computedValue.replace('px', '')
      return parseInt(valueStr)

    default:
      return null
  }
}

window.uiKit.string = {}
window.uiKit.string.replaceAll = function(str, searchvalue, newvalue) {
  let regexp = new RegExp(searchvalue, 'g')
  return str.replace(regexp, newvalue)
}

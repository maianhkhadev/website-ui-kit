const LineClamp = {

}

LineClamp.getLineHeight = function(computedStyle) {
  let computedValue = computedStyle.getPropertyValue('line-height')
  let valueStr = computedValue.replace('px', '')
  return parseInt(valueStr)
}

LineClamp.loaded = function() {
  let elements = document.querySelectorAll('[data-line-clamp]')
  elements.forEach(function(element) {
    let style = window.getComputedStyle(element)
    let lineHeight = LineClamp.getLineHeight(style)
    let lineClamp = element.dataset.lineClamp

    element.classList.add('no-scroll')
    element.style.height = `${lineClamp * lineHeight}px`

    LineClamp.ellipsize(element)
  })
}

LineClamp.ellipsize = function(element) {
  let wordArray = element.innerHTML.split(' ');
  while(element.scrollHeight > element.offsetHeight) {
    wordArray.pop();
    element.innerHTML = wordArray.join(' ') + '...';
 }
}

function test(element, lineHeight) {
  let numberOfLine = element.scrollHeight / lineHeight
  let words = element.innerHTML.split(' ');
  let wordsOfLine = words.length / numberOfLine

  words = words.slice(0, parseInt(wordsOfLine) * 4)

  return words
}

window.uiKit.LineClamp = LineClamp

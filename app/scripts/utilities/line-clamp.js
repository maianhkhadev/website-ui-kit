const LineClamp = class {

  constructor() {

  }

  static loaded() {
    LineClamp.activate()

    window.addEventListener('resize', function() {
      LineClamp.execute()
    })
  }

  static activate() {
    LineClamp.setDataContent()
    LineClamp.execute()
  }

  static setDataContent() {
    let elements = document.querySelectorAll('[data-line-clamp]')
    elements.forEach(function(element) {
      if(element.dataset.content === undefined) {
        element.dataset.content = element.innerHTML
      }
    })
  }

  static execute() {
    let elements = document.querySelectorAll('[data-line-clamp]')
    elements.forEach(function(element) {
      let lineClamp = element.dataset.lineClamp
      let lineHeight = uiKit.element.getComputedStyle(element, 'line-height')

      element.style.height = `${lineClamp * lineHeight}px`
      element.classList.add('no-scroll')

      LineClamp.shave(element)
    })
  }

  static shave(element) {
    element.innerHTML = element.dataset.content
    let words = element.dataset.content.split(' ')
    while(element.scrollHeight > element.offsetHeight) {
      words.pop()
      element.innerHTML = `${words.join(' ')}...`
    }
  }
}

window.uiKit.LineClamp = LineClamp

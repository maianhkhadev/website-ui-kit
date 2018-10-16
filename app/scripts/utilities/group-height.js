const GroupHeight = {

  loaded: function() {
    let self = this

    window.addEventListener('resize', function() {
      self.onHTMLResize()
    })

    self.afterHTMLLoaded()
    self.onHTMLResize()
  },
  calc: function() {
    let self = this
    self.onHTMLResize()
  },
  afterHTMLLoaded: function() {
    let elements = document.querySelectorAll('[data-group-height]')
    elements.forEach(function(element) {
      element.setAttribute('uikit-calculated', 'false')
    })
  },
  beforeHTMLResize: function() {
    let elements = document.querySelectorAll('[data-group-height]')
    elements.forEach(function(element) {
      element.setAttribute('uikit-calculated', 'false')
      element.style.height = ''
    })
  },
  onHTMLResize: function() {
    let self = this

    self.beforeHTMLResize()

    let elements = document.querySelectorAll('[data-group-height]')
    elements.forEach(function(element) {

      if(element.getAttribute('uikit-calculated') === 'false') {

        let groupHeight = element.dataset.groupHeight
        let height = self.getHeight(groupHeight)
        self.setHeight(groupHeight, height)
      }
    })
  },
  setHeight: function(name, height) {
    let elements = document.querySelectorAll(`[data-group-height="${name}"]`)
    elements.forEach(function(element) {
      element.style.height = `${height}px`
      element.setAttribute('uikit-calculated', 'true');
    })
  },
  getHeight: function(name) {
    let height = 0
    let elements = document.querySelectorAll(`[data-group-height="${name}"]`)
    elements.forEach(function(element) {
      if(element.clientHeight > height) {
        height = element.clientHeight
      }
    })

    return height
  }
}

window.uiKit.GroupHeight = GroupHeight

export default GroupHeight

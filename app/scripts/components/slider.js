const Slider = function(selector, options = { dots: true, arrow: true, slidesToShow: 1 }) {
  let self = this
  self.selector = selector
  self.options = options

  self.init = function() {
    let element = document.querySelector(self.selector)

    if(element === null) {
      return
    }

    for(let i = 0; i < element.children.length; i++) {
      element.children[i].classList.add('uikit-slide')
    }

    self.setSlidesWidth()
    self.createSliderElements()
  }

  self.setSlidesWidth = function() {
    let slider = document.querySelector(self.selector)
    let sliderWidth = slider.clientWidth
    let slides = document.querySelectorAll(`${self.selector} .uikit-slide`)
    slides.forEach(function(slide) {
      let slidesToShow = self.options.slidesToShow
      slide.style.flexBasis = `${sliderWidth / slidesToShow}px`
    })
  }

  self.createSliderElements = function() {
    let slider = document.querySelector(self.selector)

    let slideContainer = document.createElement('div')
    slideContainer.classList.add('uikit-slide-container')

    let slides = document.querySelectorAll(`${self.selector} .uikit-slide`)
    slides.forEach(function(slide) {
      let cloneSlide = slide.cloneNode(true)
      slideContainer.appendChild(cloneSlide)
    })
    slides.forEach(function(slide) {
      slideContainer.appendChild(slide)
    })

    slider.appendChild(slideContainer)
  }

  self.prev = function() {

  }

  self.next = function() {

  }

  self.init()

  setInterval(function() {
    self.next()
  }, 5000)
}

Slider.loaded = function() {
  console.log(1)
}

Slider.prevSlide = function(selector) {

}

Slider.nextSlide = function(selector) {

}

if(window.uiKit === undefined) {
  window.uiKit = {}
}

window.uiKit.Slider = Slider
console.log(Slider)
export default Slider

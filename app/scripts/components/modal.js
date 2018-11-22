const eventShow = new CustomEvent('modal.show')
const eventShown = new CustomEvent('modal.shown')
const eventHide = new CustomEvent('modal.hide')
const eventHidden = new CustomEvent('modal.hidden')

const Modal = function(selector, options = {}) {
  let self = this
  self.selector = selector
  self.options = options

  self.show = function() {
    Modal.show(self.selector, self.options)
  }

  self.hide = function() {
    Modal.hide(self.selector, self.options)
  }
}

Modal.loaded = function() {
  Modal.createBackdrop()

  let modals = document.querySelectorAll('.modal')
  modals.forEach(function(modal) {

    let transitionEnd = function(event) {

      if(event.propertyName !== 'transform') {
        return
      }

      if(modal.classList.contains('active')) {
        modal.dispatchEvent(eventShown)
      }
      else {
        modal.dispatchEvent(eventHidden)
      }
    }

    modal.addEventListener('webkitTransitionEnd', transitionEnd)
    modal.addEventListener('oTransitionEnd', transitionEnd)
    modal.addEventListener('transitionend', transitionEnd)
  })

  let selectors = document.querySelectorAll('[data-modal-selector]')
  selectors.forEach(function(selector) {

    selector.addEventListener('click', function() {
      let modalSelector = selector.dataset.modalSelector
      let modal = document.querySelector(modalSelector)

      if(modal.classList.contains('active')) {
        Modal.hide(modalSelector)
      }
      else {
        Modal.show(modalSelector)
      }
    })
  })

  let dimissers = document.querySelectorAll('[data-modal-dimiss]')
  dimissers.forEach(function(dimisser) {

    dimisser.addEventListener('click', function() {
      let modalDimiss = dimisser.dataset.modalDimiss
      Modal.hide(modalDimiss)
    })
  })
},

Modal.createBackdrop = function() {
  let self = this

  let backdrop = document.createElement('div')
  backdrop.classList.add('backdrop')
  backdrop.addEventListener('click', function() {

    let modals = document.querySelectorAll('.modal')
    modals.forEach(function(modal) {
      Modal.hideWithElement(modal)
    })
  })

  let body = document.querySelector('body')
  body.appendChild(backdrop)
}

Modal.show = function(selector, options = { backdrop: true, scroll: false }) {
  let modal = document.querySelector(selector)
  modal.classList.add('show')

  if(options.scroll === false) {
    let body = document.querySelector('body')
    body.classList.add('no-scroll')
  }

  if(options.backdrop === true) {
    let backdrop = document.querySelector('.backdrop')
    backdrop.classList.add('show')
  }

  modal.dispatchEvent(eventShow)
}

Modal.hide = function(selector) {
  let modal = document.querySelector(selector)
  Modal.hideWithElement(modal)
}

Modal.hideWithElement = function(modal) {
  modal.classList.remove('show')

  let body = document.querySelector('body')
  body.classList.remove('no-scroll')

  let backdrop = document.querySelector('.backdrop')
  backdrop.classList.remove('show')

  modal.dispatchEvent(eventHide)
}

if(window.uiKit === undefined) {
  window.uiKit = {}
}

window.uiKit.Modal = Modal

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
  Modal.createBackDrop()

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

  let triggers = document.querySelectorAll('[data-modal-selector]')
  triggers.forEach(function(trigger) {

    trigger.addEventListener('click', function() {
      let selector = trigger.dataset.modalSelector
      let modal = document.querySelector(selector)

      if(modal.classList.contains('active')) {
        Modal.hide(selector)
      }
      else {
        Modal.show(selector)
      }
    })
  })

  let dimissers = document.querySelectorAll('[data-modal-dimiss]')
  dimissers.forEach(function(dimisser) {

    dimisser.addEventListener('click', function() {
      let selector = dimisser.dataset.modalDimiss
      Modal.hide(selector)
    })
  })
},

Modal.createBackDrop = function() {
  let self = this

  let backdrop = document.createElement('div')
  backdrop.classList.add('backdrop')
  backdrop.addEventListener('click', function() {

    let triggers = document.querySelectorAll('[data-modal-selector]')
    triggers.forEach(function(trigger) {
      let selector = trigger.dataset.modalSelector
      Modal.hide(selector)
    })
  })

  let body = document.querySelector('body')
  body.appendChild(backdrop)
}

Modal.show = function(selector, options = {}) {
  let modal = document.querySelector(selector)
  modal.classList.add('active')

  let body = document.querySelector('body')
  body.classList.add('no-scroll')

  let backdrop = document.querySelector('.backdrop')
  backdrop.classList.add('show')

  modal.dispatchEvent(eventShow)
}

Modal.hide = function(selector) {
  let modal = document.querySelector(selector)
  modal.classList.remove('active')

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

export default Modal

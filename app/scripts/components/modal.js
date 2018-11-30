const eventShow = new CustomEvent('modal.show')
const eventShown = new CustomEvent('modal.shown')
const eventHide = new CustomEvent('modal.hide')
const eventHidden = new CustomEvent('modal.hidden')

const Modal = function(selector, options = {}) {

}

Modal.loaded = function() {
  Modal.createBackdrop()
  Modal.addEventListeners()
},

Modal.addEventListeners = function() {

  let modals = document.querySelectorAll('.modal')
  modals.forEach(function(modal) {

    let transitionEnd = function(event) {

      if(event.propertyName !== 'transform') {
        return
      }

      if(modal.classList.contains('show')) {
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
    selector.removeEventListener('click', function() {
      let modalSelector = selector.dataset.modalSelector
      Modal.show(modalSelector)
    })
    selector.addEventListener('click', function() {
      let modalSelector = selector.dataset.modalSelector
      Modal.show(modalSelector)
    })
  })

  let dismissers = document.querySelectorAll('[data-modal-dismiss]')
  dismissers.forEach(function(dismisser) {
    dismisser.removeEventListener('click', function() {
      let modalDismiss = dismisser.dataset.modalDismiss
      Modal.hide(modalDismiss)
    })
    dismisser.addEventListener('click', function() {
      let modalDismiss = dismisser.dataset.modalDismiss
      Modal.hide(modalDismiss)
    })
  })
},

Modal.createBackdrop = function() {
  let backdrop = document.querySelector('.backdrop')

  if(backdrop !== null) {
    return
  }
  else {
    backdrop = document.createElement('div')
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
}

Modal.show = function(selector, options = { backdrop: true }) {
  let modal = document.querySelector(selector)
  modal.classList.add('show')

  let body = document.querySelector('body')
  body.classList.add('no-scroll')

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

window.uiKit.Modal = Modal

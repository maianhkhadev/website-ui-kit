const eventShow = new CustomEvent('modal.show')
const eventShown = new CustomEvent('modal.shown')
const eventHide = new CustomEvent('modal.hide')
const eventHidden = new CustomEvent('modal.hidden')

const Modal = {

  init: function() {
    let self = this

    let modals = document.querySelectorAll('.modals')
    modals.forEach(function(modal) {

      modal.addEventListener('transitionend', function() {
        if(modal.classList.contains('active')) {
          modal.dispatchEvent(eventShown)
        }
        else {
          modal.dispatchEvent(eventHidden)
        }
      })
    })

    let triggers = document.querySelectorAll('[data-modal-selector]')
    triggers.forEach(function(trigger) {

      trigger.addEventListener('click', function() {
        let selector = trigger.dataset.modalSelector
        let modal = document.querySelector(selector)

        if(modal.classList.contains('active')) {
          self.hide(selector)
        }
        else {
          self.show(selector)
        }
      })
    })
  },

  show: function(selector) {
    let modal = document.querySelector(selector)
    modal.classList.add('active')

    let body = document.querySelector('body')
    body.classList.add('no-scroll')

    modal.dispatchEvent(eventShow)
  },

  hide: function(selector) {
    let modal = document.querySelector(selector)
    modal.classList.remove('active')

    let body = document.querySelector('body')
    body.classList.remove('no-scroll')

    modal.dispatchEvent(eventHide)
  }
}

if(window.uiKit === undefined) {
  window.uiKit = {}
}

window.uiKit.Modal = Modal

export default Modal

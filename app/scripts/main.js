document.addEventListener('DOMContentLoaded', function() {

  let modal = document.querySelector('.modal')
  modal.addEventListener('modal.show', function() {
    console.log('modal-show')
  })
  modal.addEventListener('modal.shown', function() {
    console.log('modal-shown')
  })
  modal.addEventListener('modal.hide', function() {
    console.log('modal-hide')
  })
  modal.addEventListener('modal.hidden', function() {
    console.log('modal-hidden')
  })

  let tab = document.querySelector('.tab')
  tab.addEventListener('tab.change', function(e) {
    console.log('tab-change')
  })
})

document.addEventListener('DOMContentLoaded', function() {

  let modal = document.querySelector('.modal')
  modal.addEventListener('modal.show', function() {
    console.log('show')
  })
  modal.addEventListener('modal.shown', function() {
    console.log('shown')
  })
  modal.addEventListener('modal.hide', function() {
    console.log('hide')
  })
  modal.addEventListener('modal.hidden', function() {
    console.log('hidden')
  })
})

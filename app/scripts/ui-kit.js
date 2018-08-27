import Modal from './components/modal'

document.addEventListener('DOMContentLoaded', function() {

  function contructor() {
    Modal.init()
  }

  window.addEventListener('resize', function() {

  })

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

  contructor()
})
//
// function DetectTouchDevice() {
//   let html = document.querySelector('html')
//
//   if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i)) {
//     html.classList.add('touch-device')
//   }
//   else {
//     html.classList.remove('touch-device')
//   }
// }
//
// function DetectFullscreen() {
//   let html = document.querySelector('html')
//
//   if(html.classList.contains('touch-device')) {
//     let elements = document.querySelectorAll('.fullscreen')
//     elements.forEach(function(element) {
//       element.style.height = `${window.innerHeight}px`
//     })
//   }
// }

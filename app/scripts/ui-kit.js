document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('resize', function() {
    DetectTouchDevice()
  })

  window.uiKit.Modal.loaded()
  window.uiKit.Navbar.loaded()
  window.uiKit.Tab.loaded()

  window.uiKit.FormCheck.loaded()
  window.uiKit.GroupHeight.loaded()

  DetectTouchDevice()
})

function DetectTouchDevice() {
  let html = document.querySelector('html')

  if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i)) {
    html.classList.add('touch-device')
  }
  else {
    html.classList.remove('touch-device')
  }
}

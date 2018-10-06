import Modal from './components/modal'
import Navbar from './components/navbar'
import Tab from './components/tab'

import FormCheck from './utilities/form-check'
import GroupHeight from './utilities/group-height'

document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('resize', function() {
    DetectTouchDevice()
  })

  Modal.loaded()
  Navbar.loaded()
  Tab.loaded()

  FormCheck.loaded()
  GroupHeight.loaded()

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

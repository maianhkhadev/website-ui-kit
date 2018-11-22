const Navbar = {

  loaded: function() {
    let self = this

    let icon = document.querySelector('.navbar-icon')

    if(icon === null) {
      return
    }

    icon.addEventListener('click', function() {
      icon.classList.toggle('active')
      document.querySelector('.nav').classList.toggle('when-navbar-icon-active')
    })
  }
}

if(window.uiKit === undefined) {
  window.uiKit = {}
}

window.uiKit.Navbar = Navbar

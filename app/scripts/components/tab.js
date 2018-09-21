const Tab = {

  loaded: function() {
    let self = this

    let tabLinks = document.querySelectorAll('.tab .tab-link')
    tabLinks.forEach(function(tabLink) {
      tabLink.addEventListener('click', function() {
        self.beforeTabLinkClick()

        let tabContentId = tabLink.dataset.tabContentId
        let tabContent = document.querySelector(`#${tabContentId}`)

        tabLink.classList.add('active')
        tabContent.classList.add('show')
      })
    })
  },

  beforeTabLinkClick: function() {
    let tabLinks = document.querySelectorAll('.tab .tab-link')
    tabLinks.forEach(function(tabLink) {
      tabLink.classList.remove('active')
    })

    let tabContents = document.querySelectorAll('.tab .tab-content')
    tabContents.forEach(function(tabContent) {
      tabContent.classList.remove('show')
    })
  }
}

if(window.uiKit === undefined) {
  window.uiKit = {}
}

window.uiKit.Tab = Tab

export default Tab
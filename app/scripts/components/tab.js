const eventChange = new CustomEvent('tab.change')

const Tab = function() {

}

Tab.loaded = function() {
  let tabLinks = document.querySelectorAll('.tab .tab-link')
  tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function() {
      Tab.beforeTabLinkClick()

      let tabContentId = tabLink.dataset.tabContentId
      let tabContent = document.querySelector(`#${tabContentId}`)

      tabLink.classList.add('active')
      tabContent.classList.add('show')

      let tab = tabContent.closest('.tab')
      tab.dispatchEvent(eventChange)
    })
  })
}

Tab.beforeTabLinkClick = function() {
  let tabLinks = document.querySelectorAll('.tab .tab-link')
  tabLinks.forEach(function(tabLink) {
    tabLink.classList.remove('active')
  })

  let tabContents = document.querySelectorAll('.tab .tab-content')
  tabContents.forEach(function(tabContent) {
    tabContent.classList.remove('show')
  })
}

window.uiKit.Tab = Tab

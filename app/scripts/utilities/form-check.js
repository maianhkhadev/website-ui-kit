const FormCheck = {

  loaded: function() {
    let self = this

    self.bindLabelWithInput()
  },
  generateUniqueID: function() {
    return '_' + Math.random().toString(36).substr(2, 9)
  },
  bindLabelWithInput: function() {
    let self = this

    let formChecks = document.querySelectorAll('.form-check')
    formChecks.forEach(function(formCheck) {
      let label = formCheck.querySelector('.form-check-label')
      let input = formCheck.querySelector('.form-check-input')

      if(label !== null && input !== null && label.htmlFor === '' && input.id === '') {
        let id = self.generateUniqueID()
        label.htmlFor = id
        input.id = id
      }
    })
  }
}

window.uiKit.FormCheck = FormCheck

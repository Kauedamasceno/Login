// const
const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector("#email")

const textarea = document.querySelector("#textarea")
const consent = document.querySelector("#consent")

// const error
const errorFirstName = document.querySelector('#error_first_name')
const errorLastName = document.querySelector('#error_last_name')
const errorEmail = document.querySelector("#error_email")
const errorTextarea = document.querySelector("#error_textarea")
const errorConsent = document.querySelector("#error_consent")

const submit = document.querySelector('.submit')

// validate
const validation = () => {
  errorFirstName.textContent = '';
  errorLastName.textContent = '';
  errorEmail.textContent = '';
  errorTextarea.textContent = ''
  errorConsent.textContent = ''

  let isValid = true

  if (firstName.value == ''){
  errorFirstName.textContent = 'this field is required'
  isValid = false
  }
  
  if (lastName.value == '') {
    errorLastName.textContent = 'this field is required'
    isValid = false
  }

  if (email.value == '' || !email.value.includes('@')) {
    errorEmail.textContent = 'Please enter a valid email addres'
    isValid = false
  }

  if (textarea.value == '') {
    errorTextarea.textContent = 'This field is required'
    isValid = false
  }

  if (!consent.checked) {
    errorConsent.textContent = 'To submit this form, please content to being contacted'
    isValid = false  
  }


  if (isValid){
    return 'it is validate'
  }
  
}

//submit

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const validade = validation()
})
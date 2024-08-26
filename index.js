// const
const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector("#email")
const queries = document.querySelectorAll(".queries_choose")
const textarea = document.querySelector("#textarea")
const consent = document.querySelector("#consent")

// const error
const errorFirstName = document.querySelector('#error_first_name')
const errorLastName = document.querySelector('#error_last_name')
const errorEmail = document.querySelector("#error_email")
const errorQueries = document.querySelector("#error_queries")
const errorTextarea = document.querySelector("#error_textarea")
const errorConsent = document.querySelector("#error_consent")

const submit = document.querySelector('.submit')

// validate
const validation = () => {
  errorFirstName.textContent = '';
  errorLastName.textContent = '';
  errorEmail.textContent = '';
  errorTextarea.textContent = ''
  errorConsent.textContent = '';
  errorQueries.textContent = ''

  const queryGeneralEnquiry = queries[0]
  const querySuportRequest = queries[1]
  console.log(querySuportRequest,queryGeneralEnquiry)

  let isValid = true

  if (firstName.value == ''){
  errorFirstName.textContent = 'this field is required'
  isValid = false
  firstName.style.border = "1px solid hsl(0, 66%, 54%)"
  }else {
    firstName.style.border =  '1px solid hsl(186, 15%, 59%)';
  }
  
  if (lastName.value == '') {
    errorLastName.textContent = 'this field is required'
    isValid = false
    lastName.style.border = "1px solid hsl(0, 66%, 54%)"
  } else {
    lastName.style.border =  '1px solid hsl(186, 15%, 59%)'
  }

  if (email.value == '' || !email.value.includes('@')) {
    errorEmail.textContent = 'Please enter a valid email addres'
    isValid = false
    email.style.border = "1px solid hsl(0, 66%, 54%)"
  } else {
    email.style.border =  '1px solid hsl(186, 15%, 59%)'
  }

  if (!queryGeneralEnquiry.checked && !querySuportRequest.checked) {
    errorQueries.textContent = 'error'
    firstName.classList.add('error_input')
  }

  if (textarea.value == '') {
    errorTextarea.textContent = 'This field is required'
    isValid = false
    firstName.classList.add('error_input')
    textarea.style.border = "1px solid hsl(0, 66%, 54%)"
  } else {
    textarea.style.border =  '1px solid hsl(186, 15%, 59%)'
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
  console.log(queries)
})
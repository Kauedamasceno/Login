// const
const firstName = document.querySelector(".first_name")
const lastName = document.querySelector(".last_name")
const email = document.querySelector(".email")
const queries = document.querySelectorAll(".queries_choose")
const textarea = document.querySelector(".textarea")
const consent = document.querySelector("#consent")
const popUp = document.querySelector("#popup")

// const error
const errorFirstName = document.querySelector("#error_first_name")
const errorLastName = document.querySelector("#error_last_name")
const errorEmail = document.querySelector("#error_email")
const errorQueries = document.querySelector("#error_queries")
const errorTextarea = document.querySelector("#error_textarea")
const errorConsent = document.querySelector("#error_consent")

const submit = document.querySelector(".submit")

// validate
const validation = () => {
    errorFirstName.textContent = ""
    errorLastName.textContent = ""
    errorEmail.textContent = ""
    errorTextarea.textContent = ""
    errorConsent.textContent = ""
    errorQueries.textContent = ""

    const queryGeneralEnquiry = queries[0]
    const querySuportRequest = queries[1]
    console.log(querySuportRequest, queryGeneralEnquiry)

    let isValid = true

    if (firstName.value == "") {
        errorFirstName.textContent = "this field is required"
        isValid = false
        firstName.classList.remove("first_name")
        firstName.classList.add("error_input")
    } else {
        firstName.classList.remove("error_input")
        firstName.classList.add("first_name")
    }

    if (lastName.value == "") {
        errorLastName.textContent = "this field is required"
        isValid = false
        lastName.classList.remove("last_name")
        lastName.classList.add("error_input")
    } else {
        lastName.classList.remove("error_input")
        lastName.classList.add("last_name")
    }

    if (email.value == "" || !email.value.includes("@")) {
        errorEmail.textContent = "Please enter a valid email addres"
        isValid = false
        email.classList.remove("email")
        email.classList.add("error_input")
    } else {
        email.classList.remove("error_input")
        email.classList.add("email")
    }

    if (!queryGeneralEnquiry.checked && !querySuportRequest.checked) {
        errorQueries.textContent = "Please select a query type"
    }

    if (textarea.value == "") {
        errorTextarea.textContent = "This field is required"
        isValid = false
        textarea.classList.remove("textarea")
        textarea.classList.add("error_textarea")
    } else {
        textarea.classList.remove("error_textarea")
        textarea.classList.add("textarea")
    }

    if (!consent.checked) {
        errorConsent.textContent =
            "To submit this form, please content to being contacted"
        isValid = false
    }

    return isValid
}

// popup

const popUpFunc = (pass) => {
    if (pass) {
        popUp.classList.remove("invisible")
        popUp.classList.add("popup")

        setTimeout(() => {
            popUp.classList.remove("popup")
            popUp.classList.add("invisible")
        }, 5000)
    }
}

//submit

submit.addEventListener("click", (e) => {
    e.preventDefault()
    const validade = validation()
    popUpFunc(validade)
})

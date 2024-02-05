import './style.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const validationBtn = document.querySelector("#validate");
const modal = document.querySelector("#validation");

validationBtn.addEventListener("click", () => {
    modal.showModal();
})

const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zip");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#passwordConfirmation");

// Email 
emailInput.addEventListener("input", () => {
    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please provide a valid email address.");
    } 
})

emailInput.addEventListener("onfocusout", () => {
    if (emailInput.validty.valueMissing) {
        emailInput.setCustomValidity("An email address is required!")
    }
})

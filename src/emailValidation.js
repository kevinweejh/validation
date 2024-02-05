const emailInput = document.querySelector("#email");

export default () => {
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
}
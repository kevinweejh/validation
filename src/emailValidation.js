const emailInput = document.querySelector("#email");

export default () => {
    emailInput.addEventListener("input", () => {
        validateEmail();
    })

    emailInput.addEventListener("focusout", () => {
        validateEmail();
    })

    const validateEmail = () => {
        let validityMessage = "";
        if (emailInput.validity.typeMismatch) {
            validityMessage = "Please provide a valid email address.";
        } 
        if (emailInput.validity.valueMissing) {
            validityMessage = "An email address is required!";
        }

        emailInput.setCustomValidity(validityMessage);
    }
}
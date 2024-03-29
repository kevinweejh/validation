const emailInput = document.querySelector("#email");
emailInput.classList.add(...['appearance-none','w-full','border','border-gray-800','m-0','font-inherit','text-sm','box-border', 'invalid:border-2', 'invalid:border-red-500']);

export default () => {
    emailInput.addEventListener("input", () => {
        validateEmail();
    })

    emailInput.addEventListener("focusout", () => {
        validateEmail();
    })

    const validateEmail = () => {
        let validityMessage = ""; // Ensures form considered valid with valid input
        if (emailInput.validity.typeMismatch) {
            validityMessage = "Please provide a valid email address.";
        } 
        if (emailInput.validity.valueMissing) {
            validityMessage = "An email address is required!";
        }

        emailInput.setCustomValidity(validityMessage);
        emailInput.reportValidity();
    }
}
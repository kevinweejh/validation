const passwordInput = document.querySelector("#password");
passwordInput.classList.add(...['appearance-none','w-full','border','border-gray-800','m-0','font-inherit','text-sm','box-border', 'invalid:border-2', 'invalid:border-red-500']);

export default () => {
    passwordInput.addEventListener("input", () => {
        validatePassword();
    })

    const validatePassword = () => {
        let validityMessage = "";
        const digitRule = /(?=.*\d)/;
        if (!digitRule.test(passwordInput.value)) {
            validityMessage = "Please include at least 1 digit."
        }
        const lowercaseRule = /(?=.*[a-z])/;
        if (!lowercaseRule.test(passwordInput.value)) {
            validityMessage = "Please include at least 1 lowercase alphabet."
        } 
        const uppercaseRule = /(?=.*[A-Z])/;
        if (!uppercaseRule.test(passwordInput.value)) {
            validityMessage = "Please include at least 1 uppercase alphabet."
        } 
        const specialCharRule = /(?=.*[!@#$%^&*?])/;
        if (!specialCharRule.test(passwordInput.value)) {
            validityMessage = "Please include at least 1 special character (Allowed characters: !@#$%^&*?)."
        } 
        if (passwordInput.validity.valueMissing) {
            validityMessage = "A password is required!";
        }
        if (passwordInput.validity.tooLong) {
            validityMessage = "A password must be a maximum of 254 characters long."
        }
        if (passwordInput.validity.tooShort) {
            validityMessage = "A password must be a minimum of 8 characters long."
        }

        passwordInput.setCustomValidity(validityMessage)
        passwordInput.reportValidity();
    }
    
}
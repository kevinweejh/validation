const passwordConfirmationInput = document.querySelector("#passwordConfirmation");
passwordConfirmationInput.classList.add(...['appearance-none','w-full','border','border-gray-800','m-0','font-inherit','text-sm','box-border', 'invalid:border-2', 'invalid:border-red-500']);

export default () => {
    passwordConfirmationInput.addEventListener("input", () => {
        checkPasswordMatch();
    })

    const checkPasswordMatch = () => {
        const enteredPassword = document.querySelector('#password').value;
        let validityMessage = "";
        if (passwordConfirmationInput.value !== enteredPassword) {
            validityMessage = "Passwords do not match";
        }

        passwordConfirmationInput.setCustomValidity(validityMessage);
        passwordConfirmationInput.reportValidity();
    }
}
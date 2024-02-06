const zipInput = document.querySelector("#zip");
zipInput.classList.add(...['appearance-none','w-full','border','border-gray-800','m-0','font-inherit','text-sm','box-border', 'invalid:border-2', 'invalid:border-red-500']);

export default () => {
    zipInput.addEventListener("input", () => {
        validateZip();
    })

    zipInput.addEventListener("focusout", () => {
        validateZip();
    })

    const validateZip = () => {
        let validityMessage = "";
        if (zipInput.validity.valueMissing) {
            validityMessage = "A zip code is required!";
        }
        if (zipInput.validity.tooLong) {
            validityMessage = "A zip code must be a maximum of 10 characters long."
        }
        if (zipInput.validity.tooShort) {
            validityMessage = "A zip code must be a minimum of 3 characters long."
        }
        if (zipInput.validity.patternMismatch) {
            validityMessage = "A zip code must only contain alphanumeric characters."
        }

        zipInput.setCustomValidity(validityMessage);
        zipInput.reportValidity();
    }
}
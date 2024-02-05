import './style.css';
import EmailValidation from './emailValidation';
import CountryValidation from './countryValidation';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const validationBtn = document.querySelector("#validate");
const modal = document.querySelector("#validation");

validationBtn.addEventListener("click", () => {
    modal.showModal();
})

EmailValidation();
CountryValidation();

const zipInput = document.querySelector("#zip");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#passwordConfirmation");
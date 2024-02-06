import './style.css';
import EmailValidation from './emailValidation';
import CountryValidation from './countryValidation';
import ZipValidation from './zipValidation';
import PasswordValidation from './passwordValidation';
import PasswordConfirmation from './passwordConfirmation';

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
ZipValidation();
PasswordValidation();
PasswordConfirmation();
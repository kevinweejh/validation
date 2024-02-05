import { createElement } from './utils';

const countryInput = document.querySelector("#country");
countryInput.classList.add(...['appearance-none','w-full','border','border-gray-800','m-0','font-inherit','text-sm','box-border'])

export default () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            processCountriesData(data);
        })
        .catch(error => {
            console.error('Fetching countries data failed:', error);
        });

    const processCountriesData = (data) => {
        const countryNames = data.map((country) => country.name.common);
        const countryCodes = data.map((country) => country.cca3);
        const combinedArray = countryNames.map((name, index) => {
            return { name: name, code: countryCodes[index] };
        })

        combinedArray.sort((a,b) => a.name.localeCompare(b.name));

        combinedArray.forEach((country) => {
            const selectionOption = createElement('option', [], country.name);
            selectionOption.setAttribute('id', country.code);

            countryInput.appendChild(selectionOption);
        })
    }
}
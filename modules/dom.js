import { title } from "./modules/utilis.js"

// This is a test scrip
export const countryUI = {
  test: (data) => {
    // This function is used to update the UI with the fetched data
    
    document.querySelector('#country-offical-name').textContent = data.officailName;   // Update the UI with the official name of the country
    document.querySelector('#country-offical-flag').src = data.flag;   // Update the UI with the flag of the country
    document.querySelector('#country-offical-flag').alt = data.flagAlt;   // Update the UI with the alt text of the flag
    document.querySelector('#country-name').textContent = data.countryName;
    document.querySelector('#country-capital').textContent = data.countryCapital;
    document.querySelector('#continents').textContent = data.continents;
    document.querySelector('#population').textContent = data.population;

    document.querySelector('#area').textContent = data.area;
    document.querySelector('#language').textContent = data.language;
    
    document.querySelector('#currency-name').textContent = data.currencyName;
    document.querySelector('#currency-symbol').textContent = data.currencySymbol;
    

    // Region
    document.querySelector('#maps').href = data.map;

    document.querySelector('#region').textContent = data.region;
    document.querySelector('#sub-region').textContent = data.subregion;
    document.querySelector('#lat').textContent = data.lat;
    document.querySelector('#lng').textContent = data.lng;
    // Timezone
    document.querySelector('#time-zone').textContent = data.timeZone;
  }
}
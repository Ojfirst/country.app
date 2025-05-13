import { addMessage } from "./utilis.js";

// This is a test scrip
export const countryUI = {
  test: (data) => {
    // This function is used to update the UI with the fetched data
    
    document.querySelector('#country-offical-name').textContent = addMessage(`Official Name: ${data.officailName}`);   // Update the UI with the official name of the country
    document.querySelector('#country-offical-flag').src = data.flag;   // Update the UI with the flag of the country
    document.querySelector('#country-offical-flag').alt = data.flagAlt;   // Update the UI with the alt text of the flag
    document.querySelector('#country-name').textContent = addMessage(`${data.countryName}`);
    document.querySelector('#country-capital').textContent = addMessage(`Capital City: ${data.countryCapital}`);
    document.querySelector('#continents').textContent = addMessage(`Continent: ${data.continents}`);
    document.querySelector('#population').textContent = addMessage(`Population Size: ${data.population}`);

    document.querySelector('#area').textContent = addMessage(`Total Land Area: ${data.area}`);
    document.querySelector('#language').textContent = addMessage(`Official Language: ${data.language}`);
    
    document.querySelector('#currency-name').textContent = addMessage(`National Currency: ${data.currencyName}`);
    document.querySelector('#currency-symbol').textContent = addMessage(`Currency Symbol: ${data.currencySymbol}`);
    

    // Region
    document.querySelector('#maps').href = data.map;

    document.querySelector('#region').textContent = addMessage(`Region: ${data.region}`);
    document.querySelector('#sub-region').textContent = addMessage(`Sub-Region: ${data.subregion}`);
    document.querySelector('#lat').textContent = addMessage(`Latitude: ${data.lat}`);
    document.querySelector('#lng').textContent = addMessage(`Longitude: ${data.lng}`);
    // Timezone
    document.querySelector('#time-zone').textContent = addMessage(`Time-Zone: ${data.timeZone}`);
  }
}
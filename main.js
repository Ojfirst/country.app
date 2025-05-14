
import { fetchAPI } from "./modules/api.js";
import { countryUI } from "./modules/dom.js";
import { inputSanitiazer } from "./modules/utilis.js";


const init = () => {

  const form = document.querySelector('#input-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#user-city-input');
    const city = inputSanitiazer(userInput.value);

    try {
      if (!city) {
        throw new Error('Please enter a city name');
      }
      const rawData = await fetchAPI(city);
      console.log(rawData);
      const processedData = {
        officailName: rawData[0].name.official,
        flag: rawData[0].flags.png,
        flagAlt: rawData[0].flags.alt,
        countryName: rawData[0].name.common,        
        countryCapital: rawData[0].capital,
        continents: rawData[0].continents,
        population: rawData[0].population,
        currencyName: Object.keys(rawData[0].currencies)[0],
        currencySymbol: Object.values(rawData[0].currencies)[0].symbol,
        area: rawData[0].area,
        language: Object.values(rawData[0].languages).join(', '),

        // Region
        map: rawData[0].maps.openStreetMaps,
        region: rawData[0].region,
        subregion: rawData[0].subregion,
        lat: rawData[0].latlng[0],
        lng: rawData[0].latlng[1],
        // Timezone
        timeZone: rawData[0].timezones,

      }
      console.log(processedData);

      countryUI.test(processedData);
    } catch (error) {
      console.error(error);
      return;
    }


  })
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
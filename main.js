
import { fetchAPI } from "./modules/api.js";
import { countryUI } from "./modules/dom.js";


const init = () => {

  const form = document.querySelector('#input-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#user-city-input');
    const city = userInput.value;

    try {
      if (!city) {
        throw new Error('Please enter a city name');
      }
      const rawData = await fetchAPI(city);
      console.log(rawData);
      const processedData = {
        countryCapital: rawData[0].capital,
      };
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
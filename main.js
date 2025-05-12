
import { fetchAPI } from "./modules/api.js";
import { countryUI } from "./modules/dom.js";


const init = () => {

  const form = document.querySelector('#input-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  })
}
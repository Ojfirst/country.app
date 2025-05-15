
const BASE_URL = 'https://restcountries.com/v3.1/name';


export const fetchAPI =  async (city) => {
    try {
      const response = await fetch(`${BASE_URL}/${city}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        }
        if (response.status === 500) {
          throw new Error('Server error, please try again later');
        }
        throw new Error(`HTTP error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch city data: ${error.message}`);
    }
}


export const api = 'cf98b032e39c4ee7b5adb9ef5c15fcfb';

export const fetchUrls = async (city) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${city}&apiKey=${api}`);
    const message = await response.json();
    return message
}
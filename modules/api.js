
const BASE_URL = 'https://restcountries.com/v3.1/name';


export const fetchAPI =  async (city) => {
    try {
      const response = await fetch(`${BASE_URL}/${city}`);
      return await response.json();
    } catch (error) {
      throw new error('Failed to fetch city content');
    }
  
}
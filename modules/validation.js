// Validation module for user input
// This module contains functions to validate user input for city names and country names.
export const cityValidator = (city) => {
  if (!city) throw new Error('Please enter a city name');
  if (/[0-9]/.test(city)) throw new Error('City name cannot contain numbers');
  if (city.length < 3) throw new Error('City name must be at least 3 characters long');
  if (city.length > 20) throw new Error('City name must be less than 50 characters long');
  return true;
}
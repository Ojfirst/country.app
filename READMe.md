# NATIV-IQ: Country Information App

NATIV-IQ is a web application that provides detailed information about any country in the world. It fetches data from the [RestCountries API](https://restcountries.com/) and displays it in an intuitive and user-friendly interface.

## Features
- Search for a country by entering a city name.
- Displays detailed information about the country, including:
  - Official name
  - Flag
  - Capital
  - Continent
  - Population
  - Area
  - Currency
  - Language(s)
  - Region and sub-region
  - Latitude and longitude
  - Time zone
  - Map link
- Error handling for invalid or empty inputs.
- Responsive design for mobile, tablet, and desktop devices.

## Tech Stack
- **HTML5**: For structuring the web page.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: For dynamic functionality and API integration.
- **RestCountries API**: For fetching country data.

## Project Structure

### Key Files
- **`index.html`**: The main HTML file for the app.
- **`styles.css`**: Contains all the styles for the app.
- **`main.js`**: The entry point for the app's JavaScript logic.
- **`modules/api.js`**: Handles API requests to fetch country data.
- **`modules/dom.js`**: Manages DOM updates for displaying data and errors.
- **`modules/utilis.js`**: Contains utility functions for data formatting and sanitization.
- **`modules/validation.js`**: Validates user input.

## How to Use
1. Clone the repository to your local machine.
2. Open `index.html` in your browser.
3. Enter a city name in the search bar and click "Search".
4. View detailed information about the country associated with the city.

## Installation
No installation is required. Simply open the `index.html` file in any modern web browser.

## API Integration
This project uses the [RestCountries API](https://restcountries.com/) to fetch country data. The API is queried using the city name provided by the user.

## Error Handling
- Displays an error message if the city name is invalid or not found.
- Handles server errors and network issues gracefully.

## Responsive Design
The app is fully responsive and works seamlessly on devices of all sizes, including mobile phones, tablets, and desktops.

## Author
- **Ojreliev Simon**  
  - [GitHub](https://github.com/Ojfirst)  
  - [LinkedIn](https://www.linkedin.com/in/simonaina)

## License
This project is licensed under the MIT License.
const searchButton = document.getElementById('search');

const locationInput = document.getElementById('location');

const weatherDescription = document.getElementById('weather-description');

const temperature = document.getElementById('temperature');

const humidity = document.getElementById('humidity');



searchButton.addEventListener('click', () => {

    const location = locationInput.value;

    if (location) {

        fetchWeatherData(location);

    }

});



function fetchWeatherData(location) {

    // Replace 'YOUR_API_KEY' with your actual API key

    const apiKey ='217e6b6f59e02b72c7317522754fc7da';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;



    fetch(apiUrl)

        .then(response => response.json())

        .then(data => {

            const description = data.weather[0].description;

            const tempKelvin = data.main.temp;

            const tempCelsius = (tempKelvin - 273.15).toFixed(2);

            const hum = data.main.humidity;



            weatherDescription.textContent = `Description: ${description}`;

            temperature.textContent = `Temperature: ${tempCelsius}°C`;

            humidity.textContent = `Humidity: ${hum}%`;

        })

        .catch(error => {

            console.error('Error fetching weather data:', error);

            weatherDescription.textContent = 'Error fetching weather data. Please try again.';

        });

}

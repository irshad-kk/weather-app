 const apiKey = '18d4bf9799cc716d1d3cec2d62971ed8';

 function fetchWeather() {
     const cityName = document.getElementById('cityName').value;

     if (cityName.trim() === '') {
         alert('Please enter a city name.');
         return;
     }

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
         .then(response => {
             if (!response.ok) {
                 throw new Error('City not found. Please enter a valid city name.');
             }
             return response.json();
         })
         .then(data => {
             displayWeatherData(data);
         })
         .catch(error => {
             console.error('Error fetching weather data:', error);
             alert(error.message);
         });
 }

 function displayWeatherData(data) {
     const weatherData = document.getElementById('weatherData');
     weatherData.innerHTML = `
         <h2>Weather in ${data.name}, ${data.sys.country}</h2>
         <p>Temperature: ${data.main.temp}°C</p>
         <p>Wind Speed: ${data.wind.speed} m/s</p>
         <p>Min Temperature: ${data.main.temp_min}°C</p>
         <p>Max Temperature: ${data.main.temp_max}°C</p>
     `;
 }
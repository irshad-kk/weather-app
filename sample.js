const apiKey = `18d4bf9799cc716d1d3cec2d62971ed8`;

function fetchWeather(){

   const cityName =  document.getElementById("cityName").value

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    
   .then((response)=> response.json())
   
   .then((data=>{
    console.log(data);

        displayWeatherData(data)
   }))
   .catch((error)=>{
    console.log("something went wrong");
   })
}

function displayWeatherData(data){
    let weatherData = document.getElementById("weatherData")
    weatherData.style.display = 'block'

    weatherData.innerHTML = `
    <img style="height: 100px;" src="images/rain.png" alt="">
    <h2>${data.name}, </h2>
    <h2>Temperature : ${data.main.temp}°C, </h2>
    <h2>Wind speed :${data.wind.speed}, </h2>
    <h2>Minimum Temperature ${data.main.temp_min}, </h2>
    <h2>Maximum Temperature${data.main.temp_max}, </h2>


    


    
    `
}
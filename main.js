document.addEventListener("DOMContentLoaded", () => {
    const apikey = "36ea8c98d540736841f467de5fff5184";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const cityElement = document.querySelector(".city");
    const tempElement = document.querySelector(".temp");
    const humidityElement = document.querySelector(".humidity");
    const windElement = document.querySelector(".wind");
    const weathericon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiurl + city + "&appid=" + apikey);
        if(response.status===404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
            const data = await response.json();
        cityElement.innerHTML = data.name;
        tempElement.innerHTML = Math.round(data.main.temp) + "°C";
        humidityElement.innerHTML = data.main.humidity + "%";
        windElement.innerHTML = data.wind.speed + "km/h";

        const weatherCondition = data.weather[0].main;
        if (weatherCondition === "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (weatherCondition === "Clear") {
            weathericon.src = "images/clear.png";
        } else if (weatherCondition === "Rain") {
            weathericon.src = "images/rain.png";
        } else if (weatherCondition === "Drizzle") {
            weathericon.src = "images/drizzle.png";
        } else if (weatherCondition === "Mist") {
            weathericon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";


        }
                }

    searchbtn.addEventListener("click", () => {
        checkWeather(searchbox.value);
    });
});

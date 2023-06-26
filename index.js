let searchInput = document.querySelector('.search-input');
let searchButton = document.querySelector('.search-button');
let city = document.querySelector('.location-date .city');
let date = document.querySelector('.location-date .date');
let temperature = document.querySelector('.atmospheric .temperature');
let condition = document.querySelector('.atmospheric .weather');

searchButton.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=7c8f62dbda24cac602674435cacf4e41`)
        .then((response) => response.json())
        .then(weatherDisplay)
        .catch((error) => alert("HELLO! WELCOM TO ARNOLDKIRITU WEATHER FORECAST"))
})

const weatherDisplay = (weather) => {
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date()
    date.innerText = dateBuilder(now);
    temperature.innerHTML = `${Math.round(weather.main.temp)}℃`;
    condition.innerText = `${weather.weather[0].description}`;
}

function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  }

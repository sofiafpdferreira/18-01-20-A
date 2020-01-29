function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `:0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function formatDatePlusOne(timestamp) {
  let date = new Date(timestamp);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let day = days[date.getDay()];
  return `${day}`;
}

function formatDatePlusTwo(timestamp) {
  let date = new Date(timestamp);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let day = days[1 + date.getDay()];
  return `${day}`;
}

function formatDatePlusThree(timestamp) {
  let date = new Date(timestamp);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let day = days[2 + date.getDay()];
  return `${day}`;
}

function formatDatePlusFour(timestamp) {
  let date = new Date(timestamp);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let day = days[3 + date.getDay()];
  return `${day}`;
}

function formatDatePlusFive(timestamp) {
  let date = new Date(timestamp);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let day = days[4 + date.getDay()];
  return `${day}`;
}

function displayWeatherCondition1(response1) {
  document.querySelector("#city").innerHTML = response1.data.name;
  celciusDayZero = response1.data.main.temp;
  document.querySelector("#temperature-zero").innerHTML = `${Math.round(
    celciusDayZero
  )}ºC`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response1.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(
    response1.data.wind.speed
  )}Km/H`;
  document.querySelector("#pressure").innerHTML = `${Math.round(
    response1.data.main.pressure
  )}hPa`;
  document.querySelector(
    "#description"
  ).innerHTML = `${response1.data.weather[0].description}`;
  document.querySelector("#date").innerHTML = formatDate(
    response1.data.dt * 1000
  );
  document.querySelector("#today-plus-1").innerHTML = formatDatePlusOne(
    response1.data.dt
  );
  document.querySelector("#today-plus-2").innerHTML = formatDatePlusTwo(
    response1.data.dt
  );
  document.querySelector("#today-plus-3").innerHTML = formatDatePlusThree(
    response1.data.dt
  );
  document.querySelector("#today-plus-4").innerHTML = formatDatePlusFour(
    response1.data.dt
  );
  document.querySelector("#today-plus-5").innerHTML = formatDatePlusFive(
    response1.data.dt
  );
  document
    .querySelector("#icon-today")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response1.data.wheather[0].icon}@2x.png`
    );
}

function displayForecast(response) {
  celciusDayOne = response.data.list[8].main.temp;
  document.querySelector("#temperature-one").innerHTML = `${Math.round(
    celciusDayOne
  )}ºC`;
  celciusDayTwo = response.data.list[16].main.temp;
  document.querySelector("#temperature-two").innerHTML = `${Math.round(
    celciusDayTwo
  )}ºC`;
  celciusDayThree = response.data.list[24].main.temp;
  document.querySelector("#temperature-three").innerHTML = `${Math.round(
    celciusDayThree
  )}ºC`;
  celciusDayFour = response.data.list[32].main.temp;
  document.querySelector("#temperature-four").innerHTML = `${Math.round(
    celciusDayFour
  )}ºC`;
  celciusDayFive = response.data.list[39].main.temp;
  document.querySelector("#temperature-five").innerHTML = `${Math.round(
    celciusDayFive
  )}ºC`;

  document
    .querySelector("#icon-today-plus-one")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[8].wheather[0].icon}@2x.png`
    );
  document
    .querySelector("#icon-today-plus-two")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[16].wheather[0].icon}@2x.png`
    );
  document
    .querySelector("#icon-today-plus-three")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[24].wheather[0].icon}@2x.png`
    );
  document
    .querySelector("#icon-today-plus-four")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[32].wheather[0].icon}@2x.png`
    );
  document
    .querySelector("#icon-today-plus-five")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.list[39].wheather[0].icon}@2x.png`
    );
}

function searchCity1(city1) {
  let apiKey = "c33f9f369abbfb38690d5dd06c2b8718";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition1);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city1}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function RetrivePosition1(position1) {
  position1.preventDefault();
  let city1 = document.querySelector("#city-input").value;
  searchCity1(city1);
}

let form1 = document.querySelector("#form-city");
form1.addEventListener("submit", RetrivePosition1);

function searchLocation(position) {
  let apiKey = "c33f9f369abbfb38690d5dd06c2b8718";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition1);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity1("Lisbon");

// day 0

let celciusDayZero = null;

function convertZero(event) {
  event.preventDefault();
  let celciusZero = document.querySelector("#temperature-zero");
  celciusZero.innerHTML = Math.round((celciusDayZero * 9) / 5 + 32) + "ºF";
  convertToFahrenheitZero.classList.remove("active");
}

let convertToFahrenheitZero = document.querySelector("#fahrenheit-zero");
convertToFahrenheitZero.addEventListener("click", convertZero);

function UndoConvertZero(event) {
  event.preventDefault();
  let fahrenheitZero = document.querySelector("#temperature-zero");
  fahrenheitZero.innerHTML = Math.round(celciusDayZero) + "ºC";
  convertToCelciusZero.classList.add("active");
  convertToFahrenheitZero.classList.remove("active");
}

let convertToCelciusZero = document.querySelector("#celcius-zero");
convertToCelciusZero.addEventListener("click", UndoConvertZero);

// day 1

let celciusDayOne = null;

function convertOne(event) {
  event.preventDefault();
  let celciusOne = document.querySelector("#temperature-one");
  celciusOne.innerHTML = Math.round((celciusDayOne * 9) / 5 + 32) + "ºF";
}

let convertToFahrenheitOne = document.querySelector("#fahrenheit-one");
convertToFahrenheitOne.addEventListener("click", convertOne);

function UndoConvertOne(event) {
  event.preventDefault();
  let fahrenheitOne = document.querySelector("#temperature-one");
  fahrenheitOne.innerHTML = Math.round(celciusDayOne) + "ºC";
}

let convertToCelciusOne = document.querySelector("#celcius-one");
convertToCelciusOne.addEventListener("click", UndoConvertOne);

// day 2

let celciusDayTwo = null;

function convertTwo(event) {
  event.preventDefault();
  let celciusTwo = document.querySelector("#temperature-two");
  celciusTwo.innerHTML = Math.round((celciusDayTwo * 9) / 5 + 32) + "ºF";
}

let convertToFahrenheitTwo = document.querySelector("#fahrenheit-two");
convertToFahrenheitTwo.addEventListener("click", convertTwo);

function UndoConvertTwo(event) {
  event.preventDefault();
  let fahrenheitTwo = document.querySelector("#temperature-two");
  fahrenheitTwo.innerHTML = Math.round(celciusDayTwo) + "ºC";
}

let convertToCelciusTwo = document.querySelector("#celcius-two");
convertToCelciusTwo.addEventListener("click", UndoConvertTwo);

// day 3

let celciusDayThree = null;

function convertThree(event) {
  event.preventDefault();
  let celciusThree = document.querySelector("#temperature-three");
  celciusThree.innerHTML = Math.round((celciusDayThree * 9) / 5 + 32) + "ºF";
}

let convertToFahrenheitThree = document.querySelector("#fahrenheit-three");
convertToFahrenheitThree.addEventListener("click", convertThree);

function UndoConvertThree(event) {
  event.preventDefault();
  let fahrenheitThree = document.querySelector("#temperature-three");
  fahrenheitThree.innerHTML = Math.round(celciusDayThree) + "ºC";
}

let convertToCelciusThree = document.querySelector("#celcius-three");
convertToCelciusThree.addEventListener("click", UndoConvertThree);

// day 4

let celciusDayFour = null;

function convertFour(event) {
  event.preventDefault();
  let celciusFour = document.querySelector("#temperature-four");
  celciusFour.innerHTML = Math.round((celciusDayFour * 9) / 5 + 32) + "ºF";
}

let convertToFahrenheitFour = document.querySelector("#fahrenheit-four");
convertToFahrenheitFour.addEventListener("click", convertFour);

function UndoConvertFour(event) {
  event.preventDefault();
  let fahrenheitFour = document.querySelector("#temperature-four");
  fahrenheitFour.innerHTML = Math.round(celciusDayFour) + "ºC";
}

let convertToCelciusFour = document.querySelector("#celcius-four");
convertToCelciusFour.addEventListener("click", UndoConvertFour);

// day 5

let celciusDayFive = null;

function convertFive(event) {
  event.preventDefault();
  let celciusFive = document.querySelector("#temperature-five");
  celciusFive.innerHTML = Math.round((celciusDayFive * 9) / 5 + 32) + "ºF";
}

let convertToFahrenheitFive = document.querySelector("#fahrenheit-five");
convertToFahrenheitFive.addEventListener("click", convertFive);

function UndoConvertFive(event) {
  event.preventDefault();
  let fahrenheitFive = document.querySelector("#temperature-five");
  fahrenheitFive.innerHTML = Math.round(celciusDayFive) + "ºC";
}

let convertToCelciusFive = document.querySelector("#celcius-five");
convertToCelciusFive.addEventListener("click", UndoConvertFive);

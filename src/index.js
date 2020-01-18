let now = new Date();

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
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();

function date() {
  if (hour < 10 && minutes < 10) {
    document.querySelector("#date").innerHTML = `${day}, 0${hour}:0${minutes}`;
  } else if (hour < 10 && minutes >= 10) {
    document.querySelector("#date").innerHTML = `${day}, 0${hour}:${minutes}`;
  } else if (hour >= 10 && minutes < 10) {
    document.querySelector("#date").innerHTML = `${day}, ${hour}:0${minutes}`;
  } else {
    document.querySelector("#date").innerHTML = `${day}, ${hour}:${minutes}`;
  }
}

date();

let followingDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

let dayPlusOne = document.querySelector("#today-plus-1");
dayPlusOne.innerHTML = followingDays[1 + now.getDay()];

let dayPlusTwo = document.querySelector("#today-plus-2");
dayPlusTwo.innerHTML = followingDays[2 + now.getDay()];

let dayPlusThree = document.querySelector("#today-plus-3");
dayPlusThree.innerHTML = followingDays[3 + now.getDay()];

let dayPlusFour = document.querySelector("#today-plus-4");
dayPlusFour.innerHTML = followingDays[4 + now.getDay()];

let dayPlusFive = document.querySelector("#today-plus-5");
dayPlusFive.innerHTML = followingDays[5 + now.getDay()];

function displayWeatherCondition1(response1) {
  document.querySelector("#city").innerHTML = response1.data.name;
  document.querySelector("#temperature-zero").innerHTML = `${Math.round(
    response1.data.main.temp
  )}ºC`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response1.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(
    response1.data.wind.speed
  )}m/s`;
  document.querySelector("#pressure").innerHTML = `${Math.round(
    response1.data.main.pressure
  )}m/s`;
  document.querySelector(
    "#description"
  ).innerHTML = `${response1.data.weather[0].main}hPa`;
}

function searchCity1(city1) {
  let apiKey = "c33f9f369abbfb38690d5dd06c2b8718";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition1);
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

//function convertZero(event) {
// event.preventDefault();
// let celciusZero = document.querySelector("#temperature-zero");
// celciusZero.innerHTML = Math.round((celciusDayZero * 9) / 5 + 32) + "ºF";
//}

//let convertToFahrenheitZero = document.querySelector("#fahrenheit-zero");
//convertToFahrenheitZero.addEventListener("click", convertZero);

//function UndoConvertZero(event) {
// event.preventDefault();
//  let fahrenheitZero = document.querySelector("#temperature-zero");
// fahrenheitZero.innerHTML = celciusDayZero + "ºC";
//}

//let convertToCelciusZero = document.querySelector("#celcius-zero");
//convertToCelciusZero.addEventListener("click", UndoConvertZero);

// day 1

let celciusDayOne = 28;
let DayOne = document.querySelector("#temperature-one");
DayOne.innerHTML = celciusDayOne + "ºC";

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
  fahrenheitOne.innerHTML = celciusDayOne + "ºC";
}

let convertToCelciusOne = document.querySelector("#celcius-one");
convertToCelciusOne.addEventListener("click", UndoConvertOne);

//day 2

let celciusDayTwo = 27;
let DayTwo = document.querySelector("#temperature-two");
DayTwo.innerHTML = celciusDayTwo + "ºC";

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
  fahrenheitTwo.innerHTML = celciusDayTwo + "ºC";
}

let convertToCelciusTwo = document.querySelector("#celcius-two");
convertToCelciusTwo.addEventListener("click", UndoConvertTwo);

// day 3

let celciusDayThree = 30;
let DayThree = document.querySelector("#temperature-three");
DayThree.innerHTML = celciusDayThree + "ºC";

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
  fahrenheitThree.innerHTML = celciusDayThree + "ºC";
}

let convertToCelciusThree = document.querySelector("#celcius-three");
convertToCelciusThree.addEventListener("click", UndoConvertThree);

// day 4

let celciusDayFour = 31;
let DayFour = document.querySelector("#temperature-four");
DayFour.innerHTML = celciusDayFour + "ºC";

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
  fahrenheitFour.innerHTML = celciusDayFour + "ºC";
}

let convertToCelciusFour = document.querySelector("#celcius-four");
convertToCelciusFour.addEventListener("click", UndoConvertFour);

// day 5

let celciusDayFive = 32;
let DayFive = document.querySelector("#temperature-five");
DayFive.innerHTML = celciusDayFive + "ºC";

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
  fahrenheitFive.innerHTML = celciusDayFive + "ºC";
}

let convertToCelciusFive = document.querySelector("#celcius-five");
convertToCelciusFive.addEventListener("click", UndoConvertFive);

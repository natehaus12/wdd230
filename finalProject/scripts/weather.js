const lat = '33.16';
const lon = '-117.35';
const apikey = 'f8ad7ad4a415c188584653d269188f76';
const weatherIcon = document.querySelector('#weatherIcon');
const descriptionObj = document.querySelector("#description");
const tempobj = document.querySelector("#current-temperature");
const humidityObj = document.querySelector("#humidity")
const forecast1 = document.querySelector("#forecast-1")
const date1 = document.querySelector("#date1")
const forecast2 = document.querySelector("#forecast-2")
const date2 = document.querySelector("#date2")
const forecast3 = document.querySelector("#forecast-3")
const date3 = document.querySelector("#date3")

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`



function displayForecast(weatherData) {
    date1.innerHTML = weatherData.list[0].dt_txt.slice(6,10)
    date2.innerHTML = weatherData.list[7].dt_txt.slice(6,10)
    date3.innerHTML = weatherData.list[15].dt_txt.slice(6,10)

    forecast1.innerHTML = weatherData.list[0].main.temp.toFixed(0);
    forecast2.innerHTML = weatherData.list[7].main.temp.toFixed(0);
    forecast3.innerHTML = weatherData.list[15].main.temp.toFixed(0);
   }

  const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

  function displayResults(weatherData) {

  
      tempobj.innerHTML = weatherData.main.temp.toFixed(0);
  
     
      const description = weatherData.weather[0].main;
      descriptionObj.innerHTML = description;

      const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  
      weatherIcon.setAttribute('src', icon);
      weatherIcon.setAttribute('alt', description);
      descriptionObj.innerHTML = description;

      humidityObj.innerHTML = weatherData.main.humidity

  
  
  
  
  
  
  
    }

  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  async function apiFetch2() {
    try {
      const response = await fetch(url2);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch2();
  apiFetch();
 

  
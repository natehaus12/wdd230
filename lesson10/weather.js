// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = '64.8401';
const lon = '-147.72';
const apikey = 'f8ad7ad4a415c188584653d269188f76';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;


function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const description = weatherData.weather[0].main;

    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description


  }

async function apiFetch() {
    try {
      const response = await fetch(url);
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
  
  apiFetch();






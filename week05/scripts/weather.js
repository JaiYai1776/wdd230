const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=02bfc636d8449db368967a05c1c55800';

async function fetchWeatherData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle error display or recovery here if needed
    }
}

fetchWeatherData();

function displayResults(data) {
    const temperature = `${data.main.temp}&deg;F`;
    currentTemp.innerHTML = temperature;
    
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
}

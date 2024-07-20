// Function to fetch weather data and update HTML
function fetchWeather() {
    const apiKey = "02bfc636d8449db368967a05c1c55800";
    const city = "Humansville";
    const countryCode = "US";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=imperial&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data to see its structure

            // Update HTML elements with fetched data
            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `${data.main.temp} °F`;
            document.getElementById('description').textContent = data.weather[0].description;

            // Update weather icon
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            document.getElementById('weather-icon').setAttribute('src', iconUrl);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Call fetchWeather function when the page loads
window.addEventListener('load', fetchWeather);

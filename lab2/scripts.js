
// fetch("https://api.unsplash.com/photos/random/?client_id=kGehtlR3bOADWbEr6gnMCBVvv8ObPbzuU7hFTB7_yKs")
//     .then(response => response.json())
//     .then(data => {
//     var image = document.getElementById('image');
//     image.src = data.urls.regular;
// });

console.log("JavaScript file is successfully linked and running!");


fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.728104&lon=-73.687576&appid=0aaa0764d80ad5fd33dca15393bce371&units=imperial")
    .then(response => response.json())
    .then(data => {
        // log the json data to the console
        console.log(data);

        // Update the weather condition
        document.getElementById('weather-main').textContent = data.weather[0].main; // "Drizzle"
        document.getElementById('weather-description').textContent = data.weather[0].description; // "light intensity drizzle"

        // Update the weather icon
        let iconCode = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById('weather-icon').src = iconUrl;

        // Update the temperature details
        document.getElementById('temp').textContent = `${data.main.temp}°F`; // 62.56°F
        document.getElementById('feels-like').textContent = `${data.main.feels_like}°F`; // 63.03°F
        document.getElementById('temp-min').textContent = `${data.main.temp_min}°F`; // 61.14°F
        document.getElementById('temp-max').textContent = `${data.main.temp_max}°F`; // 63.75°F

});

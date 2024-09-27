console.log("JavaScript file is successfully linked and running!");

//add background image
fetch(
  "https://api.unsplash.com/photos/random/?client_id=kGehtlR3bOADWbEr6gnMCBVvv8ObPbzuU7hFTB7_yKs"
)
  .then((response) => response.json())
  .then((data) => {
    // Set the background image of the body
    document.body.style.backgroundImage = `url('${data.urls.regular}')`;

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed"; 
  })
  .catch((error) => {
    console.error("Error fetching image:", error);
  });

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=42.728104&lon=-73.687576&appid=0aaa0764d80ad5fd33dca15393bce371&units=imperial"
)
  .then((response) => response.json())
  .then((data) => {
    // log the json data to the console
    console.log(data);

    const weatherCondition = data.weather[0].main;
    console.log("Weather condition:", weatherCondition);

    //fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${weatherCondition}&app_id=47bdc2de&app_key=1925e691726351bfb627b4d25a96b277`)
    fetch("recipies.json") 
      .then((response) => response.json())
      .then((data) => {
        const recipes = data.hits; // Access the recipes array
        const recipeContainer = document.getElementById("recipe-container");

        // Loop through the first 6 recipes and display them
        recipes.slice(0, 6).forEach((recipeItem) => {
          const recipe = recipeItem.recipe;
          const recipeBox = document.createElement("div");
          recipeBox.classList.add("col-md-2", "mb-4"); 

          // Populate the recipe box with image, title, and link
          recipeBox.innerHTML = `
                <div class="card">
                    <a href="${recipe.url}" target="_blank">
                        <img src="${recipe.image}" class="card-img-top" alt="${recipe.label}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${recipe.label}</h5>
                    </div>
                </div>
            `;

          // Append the recipe box to the container
          recipeContainer.appendChild(recipeBox);
        });
      });
    // Update the weather condition
    document.getElementById("weather-main").textContent = data.weather[0].main; 
    document.getElementById("weather-description").textContent =
      data.weather[0].description; 

    // Update the weather icon
    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weather-icon").src = iconUrl;

    // Update the temperature details
    document.getElementById("temp").textContent = `${data.main.temp}°F`; 
    document.getElementById(
      "feels-like"
    ).textContent = `${data.main.feels_like}°F`; 
    document.getElementById("temp-min").textContent = `${data.main.temp_min}°F`; 
    document.getElementById("temp-max").textContent = `${data.main.temp_max}°F`;
  });

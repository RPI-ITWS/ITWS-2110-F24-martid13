console.log("JavaScript file is successfully linked and running!");

// Set a default background image first
document.body.style.backgroundImage = `url('https://collegevine.imgix.net/dd6ac0d3-2026-4e7f-8310-e2d7a15b0027.jpg')`;

// Optionally, if you still want a random background image from Unsplash, uncomment below:
fetch(
  "https://api.unsplash.com/photos/random/?client_id=kGehtlR3bOADWbEr6gnMCBVvv8ObPbzuU7hFTB7_yKs"
)
  .then((response) => response.json())
  .then((data) => {
    // Change background to the fetched image
    document.body.style.backgroundImage = `url('${data.urls.regular}')`;
  })
  .catch((error) => {
    console.error("Error fetching background image from Unsplash:", error);
  });

// Handle weather data submission
document
  .getElementById("fetchWeatherBtn")
  .addEventListener("click", function () {
    fetchAndDisplayWeather();
  });

function fetchAndDisplayWeather() {
  console.log("Called fetchAndDisplayWeather()");
  fetch("fetchData.php") // Adjust the path if necessary
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched weather data from DB:", data);

      // Update the weather condition
      document.getElementById("weather-main").textContent =
        data.weather[0].main;
      document.getElementById("weather-description").textContent =
        data.weather[0].description;

      // Update the weather icon
      let iconUrl = data.weather[0].icon;
      document.getElementById("weather-icon").src = iconUrl;

      // Update the temperature details
      document.getElementById("temp").textContent = `${data.main.temp}°F`;
      document.getElementById(
        "feels-like"
      ).textContent = `${data.main.feels_like}°F`;
      document.getElementById(
        "temp-min"
      ).textContent = `${data.main.temp_min}°F`;
      document.getElementById(
        "temp-max"
      ).textContent = `${data.main.temp_max}°F`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Handle recipe data submission
document
  .getElementById("fetchRecipeBtn")
  .addEventListener("click", function () {
    fetchAndDisplayRecipes();
  });

function fetchAndDisplayRecipes() {
  console.log("Fetching recipe data...");

  fetch("fetchRecipes.php") // Fetch from your PHP file
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const recipes = [
          {
            url: data.recipes.recipe1Url,
            label: data.recipes.recipe1Label,
            image: data.recipes.recipe1Image,
          },
          {
            url: data.recipes.recipe2Url,
            label: data.recipes.recipe2Label,
            image: data.recipes.recipe2Image,
          },
          {
            url: data.recipes.recipe3Url,
            label: data.recipes.recipe3Label,
            image: data.recipes.recipe3Image,
          },
          {
            url: data.recipes.recipe4Url,
            label: data.recipes.recipe4Label,
            image: data.recipes.recipe4Image,
          },
          {
            url: data.recipes.recipe5Url,
            label: data.recipes.recipe5Label,
            image: data.recipes.recipe5Image,
          },
          {
            url: data.recipes.recipe6Url,
            label: data.recipes.recipe6Label,
            image: data.recipes.recipe6Image,
          },
        ];

        const recipeContainer = document.getElementById("recipe-container");
        recipeContainer.innerHTML = ""; // Clear existing content

        // Loop through the recipes and display them
        recipes.forEach((recipe) => {
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
      } else {
        console.error("Error fetching recipes:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error fetching recipe data:", error);
    });
}

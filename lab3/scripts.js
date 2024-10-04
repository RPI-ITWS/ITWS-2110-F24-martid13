console.log("JavaScript file is successfully linked and running!");

//add background image
// fetch(
//   "https://api.unsplash.com/photos/random/?client_id=kGehtlR3bOADWbEr6gnMCBVvv8ObPbzuU7hFTB7_yKs"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     // Set the background image of the body
//     //document.body.style.backgroundImage = `url('${data.urls.regular}')`;

//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundPosition = "center";
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundAttachment = "fixed"; 
//   })
//   .catch((error) => {
//     console.error("Error fetching image:", error);
//   });

// dummy background image
document.body.style.backgroundImage = `url('${"https://collegevine.imgix.net/dd6ac0d3-2026-4e7f-8310-e2d7a15b0027.jpg"}')`;

// add functionality to api fetch buttons
// document.getElementById("fetchWeatherBtn").addEventListener("click", function() {
//   // fetch the weather data
//   console.log("Fetching weather data...");
//   fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.728104&lon=-73.687576&appid=0aaa0764d80ad5fd33dca15393bce371&units=imperial")
//   .then((response) => response.json())
//   .then(data => {
//   let iconCode = data.weather[0].icon;
//   let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//     const weatherData = {
//       data_type: 'weather',
//       condition: data.weather[0].main,
//       description: data.weather[0].description,
//       icon: iconUrl,
//       temp: data.main.temp,
//       feels_like: data.main.feels_like,
//       temp_min: data.main.temp_min,
//       temp_max: data.main.temp_max
//     };

//     // then create post command to insertData.php
//     fetch("insertData.php", {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(weatherData)
//     })
//     .then(response => response.json())
//     .then(result => {
//       console.log("Success:", result);
//     });
// });
// });

function fetchAndDisplayWeather() {
  console.log("Called fetchAndDisplayWeather()");
  fetch("fetchData.php") // Adjust the path if necessary
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched weather data from DB:", data);

      // Update the weather condition
      document.getElementById("weather-main").textContent = data.weather[0].main;
      document.getElementById("weather-description").textContent = data.weather[0].description;

      // Update the weather icon
      let iconUrl = data.weather[0].icon;
      document.getElementById("weather-icon").src = iconUrl;

      // Update the temperature details
      document.getElementById("temp").textContent = `${data.main.temp}°F`;
      document.getElementById("feels-like").textContent = `${data.main.feels_like}°F`;
      document.getElementById("temp-min").textContent = `${data.main.temp_min}°F`;
      document.getElementById("temp-max").textContent = `${data.main.temp_max}°F`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function fetchAndDisplayRecipes() {
  console.log("Called fetchAndDisplayReceipes()");
}


document.getElementById("fetchWeatherBtn").addEventListener("click", function() {
  console.log("Fetching weather data...");
  
  // Fetch weather data from the API
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.728104&lon=-73.687576&appid=0aaa0764d80ad5fd33dca15393bce371&units=imperial")
  .then((response) => response.json())
  .then(data => {
    // make the weather stuff array here (parse it)
    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherData = {
    data_type: 'weather',
    condition: data.weather[0].main,
    description: data.weather[0].description,
    icon: iconUrl,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max
    };
    console.log("Weather JSON Built:", weatherData);
    // Now send the entire weather JSON data to insertData.php
    fetch("insertData.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // send the weather data to insertData.php
      body: JSON.stringify(weatherData)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        console.log("Weather JSON inserted successfully:", result);
        fetchAndDisplayWeather();
      }
    })
    .catch(error => {
      console.error("AHHH!!!:", error);
    });
  })
});


document.getElementById("fetchRecipeBtn").addEventListener("click", function() {
  // fetch the recipe data
  console.log("Fetching recipe data...");
  fetch("https://api.edamam.com/api/recipes/v2?type=public&q=$troy&app_id=47bdc2de&app_key=1925e691726351bfb627b4d25a96b277")
  //fetch("recipies.json") 
  .then((response) => response.json())
  .then(data => {
    const recipes = data.hits.slice(0, 6);  // Get first 6 recipes
    
    // create recipeData json
    const recipeData = {
      data_type: 'recipe',
      recipe1Url: recipes[0].recipe.url,
      recipe1Label: recipes[0].recipe.label,
      recipe1Image: recipes[0].recipe.image,
      recipe2Url: recipes[1].recipe.url,
      recipe2Label: recipes[1].recipe.label,
      recipe2Image: recipes[1].recipe.image,
      recipe3Url: recipes[2].recipe.url,
      recipe3Label: recipes[2].recipe.label,
      recipe3Image: recipes[2].recipe.image,
      recipe4Url: recipes[3].recipe.url,
      recipe4Label: recipes[3].recipe.label,
      recipe4Image: recipes[3].recipe.image,
      recipe5Url: recipes[4].recipe.url,
      recipe5Label: recipes[4].recipe.label,
      recipe5Image: recipes[4].recipe.image,
      recipe6Url: recipes[5].recipe.url,
      recipe6Label: recipes[5].recipe.label,
      recipe6Image: recipes[5].recipe.image
    };

    // log recipe data to console for testing purposes
    console.log("Recipe JSON Built:", recipeData);
        // Send the recipe data to insertData.php
    fetch("insertData.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // send the weather data to insertData.php
      body: JSON.stringify(recipeData)
    })
    .then(response => response.json())
    .then(result => {
      console.log("Recipe data inserted:", result);
    })
    .catch(error => {
      console.error("Error inserting recipe data:", error);
    });
    });
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
    // // Update the weather condition
    // document.getElementById("weather-main").textContent = data.weather[0].main; 
    // document.getElementById("weather-description").textContent =
    //   data.weather[0].description; 

    // // Update the weather icon
    // let iconCode = data.weather[0].icon;
    // let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    // document.getElementById("weather-icon").src = iconUrl;

    // // Update the temperature details
    // document.getElementById("temp").textContent = `${data.main.temp}°F`; 
    // document.getElementById(
    //   "feels-like"
    // ).textContent = `${data.main.feels_like}°F`; 
    // document.getElementById("temp-min").textContent = `${data.main.temp_min}°F`; 
    // document.getElementById("temp-max").textContent = `${data.main.temp_max}°F`;
  });

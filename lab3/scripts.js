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




// function updateRecipeData() {
//   let recipeData = {
//     data_type: 'recipe',
//     recipe1Label: document.getElementById("edit-recipe-title-1").value || null,
//     recipe2Label: document.getElementById("edit-recipe-title-2").value || null,
//     recipe3Label: document.getElementById("edit-recipe-title-3").value || null,
//     recipe4Label: document.getElementById("edit-recipe-title-4").value || null,
//     recipe5Label: document.getElementById("edit-recipe-title-5").value || null,
//     recipe6Label: document.getElementById("edit-recipe-title-6").value || null
//   };

//   // Send the updated recipe data to PHP
//   fetch("updateData.php", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(recipeData)
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         console.log("Recipe data updated successfully:", data);
//         fetchAndDisplayRecipes(); // Call the function that fetches and displays the recipes
//       } else {
//         console.error("Error updating recipe data:", data.message);
//       }
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
// }

// Handle weather data submission
document.getElementById("submit-weather-btn").addEventListener("click", function() {
  let weatherData = {
    data_type: 'weather',
    condition: document.getElementById("edit-weather-condition").value || document.getElementById("weather-main").textContent,
    description: document.getElementById("edit-weather-description").value || document.getElementById("weather-description").textContent,
    icon: document.getElementById("edit-weather-icon").value || document.getElementById("weather-icon").src,
    temp: document.getElementById("edit-weather-temp").value || document.getElementById("temp").textContent.replace('°F', ''),
    feels_like: document.getElementById("edit-weather-feels-like").value || document.getElementById("feels-like").textContent.replace('°F', ''),
    temp_min: document.getElementById("edit-weather-temp-min").value || document.getElementById("temp-min").textContent.replace('°F', ''),
    temp_max: document.getElementById("edit-weather-temp-max").value || document.getElementById("temp-max").textContent.replace('°F', '')
  };
  // post the weather data to console
  console.log("Edited Weather data JSON Built:", weatherData);

  // Send the combined weather data to PHP (using insertData.php)
  fetch("insertData.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(weatherData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log("Weather data inserted successfully:", data);
        fetchAndDisplayWeather(); // Fetch and display the updated weather
      } else {
        console.error("Error inserting weather data:", data.message);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

// Handle recipe data submission
document.getElementById("submit-recipe-btn").addEventListener("click", function() {
  let recipeData = {
    data_type: 'recipe',
    recipe1Label: document.getElementById("edit-recipe-title-1").value || document.getElementById("recipe-title-1").textContent,
    recipe2Label: document.getElementById("edit-recipe-title-2").value || document.getElementById("recipe-title-2").textContent,
    recipe3Label: document.getElementById("edit-recipe-title-3").value || document.getElementById("recipe-title-3").textContent,
    recipe4Label: document.getElementById("edit-recipe-title-4").value || document.getElementById("recipe-title-4").textContent,
    recipe5Label: document.getElementById("edit-recipe-title-5").value || document.getElementById("recipe-title-5").textContent,
    recipe6Label: document.getElementById("edit-recipe-title-6").value || document.getElementById("recipe-title-6").textContent
  };

  // Post the recipe data to console for debugging purposes
  console.log("Edited Recipe data JSON Built:", recipeData);

  // Send the combined recipe data to PHP (using insertData.php)
  fetch("insertData.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipeData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log("Recipe data inserted successfully:", data);
        fetchAndDisplayRecipes(); // Fetch and display the updated recipes
      } else {
        console.error("Error inserting recipe data:", data.message);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});


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
  console.log("Fetching recipe data...");

  fetch("fetchRecipes.php") // Fetch from your PHP file
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const recipes = [
          { url: data.recipes.recipe1Url, label: data.recipes.recipe1Label, image: data.recipes.recipe1Image },
          { url: data.recipes.recipe2Url, label: data.recipes.recipe2Label, image: data.recipes.recipe2Image },
          { url: data.recipes.recipe3Url, label: data.recipes.recipe3Label, image: data.recipes.recipe3Image },
          { url: data.recipes.recipe4Url, label: data.recipes.recipe4Label, image: data.recipes.recipe4Image },
          { url: data.recipes.recipe5Url, label: data.recipes.recipe5Label, image: data.recipes.recipe5Image },
          { url: data.recipes.recipe6Url, label: data.recipes.recipe6Label, image: data.recipes.recipe6Image }
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
      console.error("Error fetching recipes:", error);
    });
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
  //fetch("https://api.edamam.com/api/recipes/v2?type=public&q=$troy&app_id=47bdc2de&app_key=1925e691726351bfb627b4d25a96b277")
  fetch("recipies.json") 
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
      if (result.success) {
        fetchAndDisplayRecipes();
      }
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
    // fetch("recipies.json") 
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const recipes = data.hits; // Access the recipes array
    //     const recipeContainer = document.getElementById("recipe-container");

    //     // Loop through the first 6 recipes and display them
    //     recipes.slice(0, 6).forEach((recipeItem) => {
    //       const recipe = recipeItem.recipe;
    //       const recipeBox = document.createElement("div");
    //       recipeBox.classList.add("col-md-2", "mb-4"); 

    //       // Populate the recipe box with image, title, and link
    //       recipeBox.innerHTML = `
    //             <div class="card">
    //                 <a href="${recipe.url}" target="_blank">
    //                     <img src="${recipe.image}" class="card-img-top" alt="${recipe.label}">
    //                 </a>
    //                 <div class="card-body">
    //                     <h5 class="card-title">${recipe.label}</h5>
    //                 </div>
    //             </div>
    //         `;

    //       // Append the recipe box to the container
    //       recipeContainer.appendChild(recipeBox);
    //     });
    //   });
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

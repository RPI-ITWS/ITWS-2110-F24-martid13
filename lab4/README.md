

Sources:

OpenWeatherMap API: https://openweathermap.org/current
Unsplash API: https://unsplash.com/
Edamam Recpie Creator API: https://www.edamam.com/

For this lab, I used a few APIs to create a simple website that displays weather data for Troy, NY, as well as recommends the user a few recipies based off the weather condition.

To do this, I grabbed the weather condition string from the weather API that characterizes the general condition of the weather, and inserted that into my API call for Edamam, which
essentially searches for recipes online based off many different search criterion. After receiving the search results back, I append them to my containers. I also have an Unsplash random 
background image for fun.

Lab3 Update:

For this lab, I created two MySQL databases, one for storing weather data and one for storing recipe data. I then created buttons so that once the user presses one, it fetches the respective data from each API, parses it, and fetch's it to my database via php. Then, I fetch another php file to post that data back and then I display it on my screen. 

Also, I added functionality for the user to edit fields of their choosing, altering them on the database and then displaying them again.
# Lab 6 - Morville's Honeycomb
## Useful
  - ### My Website: 
    - My website is useful because of its utilitarian simplicity. I provide two features, with the added ability to edit weather data. This website is useful mainly for the weather feature, but the recipe feature is more just for fun.
    
  - ### Relevant UX Law(s):
    - <b>Flow</b>: </b>Encouraging a state of immersion enhances the usefulness of an interface by keeping users engaged.
    - <b>Paradox of the Active User: </b> </b>Users dive straight into using a product without reading manuals, so making a product intuitive is essential.
    - <b>Miller’s Law: </b>Limiting information to 7 (plus or minus 2) items helps prevent cognitive overload and makes the product more useful.
    - <b>Goal-Gradient Effect: </b>Encourages users to continue using the product as they get closer to achieving their goals.
    - <b>Endowed Progress Effect: </b>Users are more likely to complete a task if they feel they’ve made progress.
      
  ### Implementation(s):
  - I adjusted the spacing of my edit fields so that the user can more easily read what they are editing by clicking on them.
  
## Usable

  - ## My Website:
    - My website is very usable, with clear affordances to the user on what does what. With the two buttons "fetch weather data" and "fetch recipes", it is clear to the user what to press here to retrieve the information. 

  - ## Relevant UX Law(s):

      - <b>Hick’s Law: </b>Simplifying choices reduces the time to make decisions, increasing usability.
    Fitts’s Law: </b>Ensuring that interactive elements are easy to click or tap improves usability.
    - <b>Doherty Threshold: </b>Reducing response time below 400ms enhances productivity and usability.
    - <b>Law of Proximity: </b>Grouping related items together makes navigation more intuitive.
    - <b>Law of Similarity: </b>Consistent design patterns increase ease of use.
    - <b>Law of Uniform Connectedness: </b>Visually connecting related elements enhances usability.
    - <b>Tesler’s Law: </b>Simplifying complex tasks helps maintain usability.
    - <b>Mental Model: </b>Aligning design with users’ expectations makes it easier to use.
    - <b>Serial Position Effect: </b>Placing important actions at the beginning or end of a list improves usability.
    - <b>Postel’s Law: </b>Being flexible in what the system accepts ensures smoother user interactions.

  - ### Implementation(s):
    - I changed the names of my fetch buttons in hopes of making it more clear to the user what these buttons do. I think "Load" is a more standard and understood word, anyways. 

## Desirable
  - ### My Website: 
    - I think this is where my recipe creation feature comes in. If the site was just weather, theres a million other sources for that information. What makes mine desirable is you receive location-based recipe suggestions. 

  - ### Relevant UX Law(s):
    - <b>Aesthetic-Usability Effect: </b>Attractive designs are perceived as more usable, making them more desirable.
    Von Restorff Effect: </b>Using distinct visual elements makes key information stand out, enhancing desirability.
    - <b>Peak-End Rule: </b>Designing for a memorable peak and end experience increases user satisfaction.
    - <b>Law of Common Region: </b>Grouping elements within a boundary makes designs more visually appealing.
    - <b>Law of Prägnanz: </b>Simplifying complex visuals enhances the desirability of the interface.
    - <b>Zeigarnik Effect: </b>Leveraging interruptions to create anticipation or curiosity makes the product more engaging.

  - ### Implementation(s):
    - I tried querying the weather condition into the edamam recipe API call but was met with security rejections. I guess edamam does not allow this type of operation, or I am not formatting it correctly. I will continue to work on this change because I think it signifigantly bumps desirability.

## Findable
  - ### My Website:
    - I think my website is generally easy to navigate and locate relevant features. Maybe I could make the editing feature smaller on the screen so users can understand more clearly what the functional features of the site are (displaying data rather than allowing you to edit it)

  - ### Relevant UX Law(s):
    - <b>Selective Attention: </b>Designing to highlight important elements helps users find what they’re looking for.
    - <b>Chunking: </b>Breaking content into manageable sections aids users in locating information quickly.
    - <b>Law of Prägnanz: </b>Simplifying information helps users locate what they need efficiently.

  ### Implementation(s):
- Reformat and slightly decrease sizing of editing section for better findability of more useful data, like the weather information and recipes.

## Accessible
  - ### My Website:
    - One area I am not sure of is mobile performance. I believe bootstrap should take care of most of that, and that I the only images I am using are the ones loaded in from the APIs, as well as proper DOM loading order.
  - ### Relevant UX Law(s):
    - <b>Cognitive Load: </b>Reducing the mental effort required to interact with a system ensures accessibility.
    - <b>Working Memory: </b>Designing interfaces that don’t overwhelm short-term memory enhances accessibility.
    - <b>Occam’s Razor: </b>Keeping designs simple ensures they are accessible to a broader audience.
    - <b>Jakob’s Law: </b>Designing based on familiar patterns reduces the learning curve, making systems more accessible.

  ### Implementation(s):
  - I altered the media max width for better mobile performance. 

## Credible
  - ### My Website:
   - Personally one area I feel my site is lacking in is a short description of what the site does. For utilitarian sites, such as those displaying practical data like weather, I like it when the site immediately discloses what it is intended to be used for, as well as a quick mention of the author for added credibility.

  - ### Relevant UX Law(s):
    - <b>Pareto Principle: </b>Focusing on the most impactful 20% of features ensures users see value, enhancing credibility.
    - <b>Law of Similarity: </b>Consistent visual elements across the interface build user trust.
    - <b>Law of Uniform Connectedness: </b>Connecting related information visually improves clarity and credibility.

  - ### Implementation(s):
     - added small subheader to the main title telling the user what the site is for, and the author's name.

## Valuable
  - ### My Website: 
    - I believe my website provides value to a very very specific kind of person who is simultaneously seeking weather and recipe information. I think for this rare person, my site is great. For the average, the site is not very valuable compared to other weather sites. I don't think "value" is core to this site at all, its more of a fun site to test features. Without a full overhaul or additional features, I don't think I can easily add value to this site. 

        At the very minimum, I can provide a link to a reputable weather source for more detailed information. 

  - ### Relevant UX Law(s):
    - <b>Parkinson’s Law: </b>Avoiding feature bloat and focusing on delivering value within time constraints enhances perceived value.
    - <b>Zeigarnik Effect: </b>Leaving tasks open-ended can engage users, driving them to return for more.
    - <b>Cognitive Bias: </b>Understanding and leveraging cognitive biases can enhance the perceived value of a product.

  - ### Implementation(s):
     -  Added reference to external weather site for the curious user. 



### Sources: 
- https://lawsofux.com/
- lab page
- https://danewesolko.medium.com/peter-morvilles-user-experience-honeycomb-904c383b6886
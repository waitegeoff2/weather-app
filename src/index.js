import "./styles.css";
const searchButton = document.querySelector(".weather-search");

// fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=8AP37SHUDAWNDGZNJLSLFKNE9&contentType=json', {mode: 'cors'})
//     .then(function(response) {
//        return response.json();
//     })
//     .then(function(response) {
//        console.log(response.currentConditions.temp);
//        console.log(response.currentConditions);
//     });



async function getWeather(location) {
    
    // await the fetching of the API
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=metric&key=8AP37SHUDAWNDGZNJLSLFKNE9&contentType=json', {mode: 'cors'})
    // json method returns a promise, we await it to get the json data and turn it into catData
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.resolvedAddress);
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.currentConditions.temp);
    console.log(weatherData.currentConditions.feelslike);
    console.log(weatherData.currentConditions.precipprob);
    console.log(weatherData.currentConditions.uvindex);
    console.log(weatherData.currentConditions.sunrise);
    console.log(weatherData.currentConditions.sunset);
}

searchButton.addEventListener("click", () => {
    
})

getWeather("new york usa");

// search.addEventListener("click", () => {
//     let searchInput = input.value;

//     let newURL = "https://api.giphy.com/v1/gifs/translate?api_key=hI6ElrMJLG0BBrhQgzlSKBiKrYPdY2eU&s=" + searchInput;
//     console.log(newURL);

//     fetch(newURL, {mode: 'cors'})
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         img.src = response.data.images.original.url;
//     })
//     .catch(function(err) {
//         console.log("Error:" + err);
//     });
// })   
import "./styles.css";
const searchButton = document.querySelector(".weather-search");
const searchBar = document.querySelector(".search-input")
const resultsDiv = document.querySelector(".weather-results");

async function displayWeather(location) {

    try {
    //ADD TRY CATCH

    resultsDiv.innerHTML = "";
    
    // await the fetching of the API
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=metric&key=8AP37SHUDAWNDGZNJLSLFKNE9&contentType=json', {mode: 'cors'})
    // json method returns a promise, we await it to get the json data and turn it into catData
    const weatherData = await response.json();

    //GIF RESPONSE

    //const gif response = URL + weatherdata.currentconditions
    //append below

    console.log(weatherData);

    //append results to DOM

    //location

    const thisLocationTitle = document.createElement("div");
    thisLocationTitle.classList.add("weatherLabel");
    thisLocationTitle.textContent = "Location";
    resultsDiv.appendChild(thisLocationTitle);

    const thisLocation = document.createElement("div");
    thisLocation.classList.add("weatherResult");
    thisLocation.textContent = weatherData.resolvedAddress;
    resultsDiv.appendChild(thisLocation);

    //conditions

    const conditionsTitle = document.createElement("div");
    conditionsTitle.classList.add("weatherLabel");
    conditionsTitle.textContent = "Current Conditions";
    resultsDiv.appendChild(conditionsTitle);

    const currentConditions = document.createElement("div");
    currentConditions.classList.add("weatherResult");
    currentConditions.textContent = weatherData.currentConditions.conditions;
    resultsDiv.appendChild(currentConditions);

    //temperature
    
    const tempTitle = document.createElement("div");
    tempTitle.classList.add("weatherLabel");
    tempTitle.textContent = "Current Temperature";
    resultsDiv.appendChild(tempTitle);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("weatherResult");
    currentTemp.textContent = weatherData.currentConditions.temp;
    resultsDiv.appendChild(currentTemp);

    //feels like
    const feelsLikeTitle = document.createElement("div");
    feelsLikeTitle.classList.add("weatherLabel");
    feelsLikeTitle.textContent = "Feels Like (Temp)";
    resultsDiv.appendChild(feelsLikeTitle);

    const feelsLike = document.createElement("div");
    feelsLike.classList.add("weatherResult");
    feelsLike.textContent = weatherData.currentConditions.feelslike;
    resultsDiv.appendChild(feelsLike);

    //precip prob
    const precipProbTitle = document.createElement("div");
    precipProbTitle.classList.add("weatherLabel");
    precipProbTitle.textContent = "Probability of Precipitation (%)";
    resultsDiv.appendChild(precipProbTitle);

    const precipProb = document.createElement("div");
    precipProb.classList.add("weatherResult");
    precipProb.textContent = weatherData.currentConditions.precipprob;
    resultsDiv.appendChild(precipProb);

    //uv index

    const UVTitle = document.createElement("div");
    UVTitle.classList.add("weatherLabel");
    UVTitle.textContent = "UV Index";
    resultsDiv.appendChild(UVTitle);

    const UVIndex = document.createElement("div");
    UVIndex.classList.add("weatherResult");
    UVIndex.textContent = weatherData.currentConditions.uvindex;
    resultsDiv.appendChild(UVIndex);

    //sunrise time

    const SunriseTitle = document.createElement("div");
    SunriseTitle.classList.add("weatherLabel");
    SunriseTitle.textContent = "Sunrise Time";
    resultsDiv.appendChild(SunriseTitle);

    const sunriseTime = document.createElement("div");
    sunriseTime.classList.add("weatherResult");
    sunriseTime.textContent = weatherData.currentConditions.sunrise;
    resultsDiv.appendChild(sunriseTime);

    //sunset time

    const sunsetTitle = document.createElement("div");
    sunsetTitle.classList.add("weatherLabel");
    sunsetTitle.textContent = "Sunset Time";
    resultsDiv.appendChild(sunsetTitle);

    const sunsetTime = document.createElement("div");
    sunsetTime.classList.add("weatherResult");
    sunsetTime.textContent = weatherData.currentConditions.sunset;
    resultsDiv.appendChild(sunsetTime);

    //forecast heading

    const forecastHeading = document.createElement("div");
    forecastHeading.classList.add("forecastHeading");
    forecastHeading.textContent = "Tomorrow's Forecast";
    resultsDiv.appendChild(forecastHeading);

    //tomorrow's high

    const highTmrwTitle = document.createElement("div");
    highTmrwTitle.classList.add("weatherLabel");
    highTmrwTitle.textContent = "Tomorrow's Forecasted High";
    resultsDiv.appendChild(highTmrwTitle);

    const tmrwHigh = document.createElement("div");
    tmrwHigh.classList.add("weatherResult");
    tmrwHigh.textContent = weatherData.days[1].tempmax;
    resultsDiv.appendChild(tmrwHigh);

    //tomorrow's low

    const lowTmrwTitle = document.createElement("div");
    lowTmrwTitle.classList.add("weatherLabel");
    lowTmrwTitle.textContent = "Tomorrow's Forecasted Low";
    resultsDiv.appendChild(lowTmrwTitle);

    const tmrwLow = document.createElement("div");
    tmrwLow.classList.add("weatherResult");
    tmrwLow.textContent = weatherData.days[1].tempmin;
    resultsDiv.appendChild(tmrwLow);
} catch (error) {
    alert("Not a valid location, please enter a new one.");
}
}

searchButton.addEventListener("click", () => {
    let location = searchBar.value;
    displayWeather(location);
})

//so you can press Enter key on the search bar

searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let location = searchBar.value;
        displayWeather(location);
    }
});

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


// fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=8AP37SHUDAWNDGZNJLSLFKNE9&contentType=json', {mode: 'cors'})
//     .then(function(response) {
//        return response.json();
//     })
//     .then(function(response) {
//        console.log(response.currentConditions.temp);
//        console.log(response.currentConditions);
//     });
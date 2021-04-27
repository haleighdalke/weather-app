import React from 'react'

export let parseWeatherData = (rawWeatherData) => {
    // debugger
    return rawWeatherData.list.map(hour => {
        return {
            "date": hour.dt_text,
            "condition": hour.weather[0].main,
            "currentTemp": hour.main.temp,
            "feelsLike": hour.main.feels_like,
            "maxTemp": hour.main.temp_max,
            "minTemp": hour.main.temp_min
        }
    })
    
}
export let fetchWeatherData = () => {
    let response = null;
    fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip=11201&appid=69d7f9c22368119f2b5294225dc8d136&units=imperial")
    .then(response => response.json())
    .then(data => {
        // debugger
        // console.log(data)
        response = parseWeatherData(data)
    })
    .catch(err => response = "Failed")
    return response;
}


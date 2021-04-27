import React, {Component} from 'react'
import WeatherCard from './WeatherCard';


class MainContent extends React.Component {

    apiWeather = {
      "cod": "200",
      "message": 0.0179,
      "cnt": 96,
      "list": [
       {
         "dt": 1596632400,
         "main": {
           "temp": 289.16,
           "feels_like": 288.41,
           "temp_min": 289.16,
           "temp_max": 289.16,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1010,
           "humidity": 78,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04n"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 2.03,
           "deg": 252,
           "gust":5.46
         },
         "visibility": 10000,
         "pop": 0.04,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2020-08-05 13:00:00"
       }],
      "city": {
       "id": 2643743,
       "name": "London",
       "coord": {
         "lat": 51.5085,
         "lon": -0.1258
       },
       "country": "GB",
       "timezone": 0,
       "sunrise": 1568958164,
       "sunset": 1569002733
      }
    };    
    
    weatherData = {
        "condition" : this.apiWeather.list[0].weather[0].main
    }

    renderWeatherCards = () => {
        return <WeatherCard weatherData={this.weatherData}></WeatherCard>
    }

    constructor() {
        super();
    }

    render(){
        return (
            <div>
                {this.renderWeatherCards()}
            </div>
        )
    }
}

export default MainContent;
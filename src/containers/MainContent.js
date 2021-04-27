import React, {Component} from 'react';
import WeatherCard from './WeatherCard';
import Header from '../components/Header';

class MainContent extends React.Component {

    constructor() {
        super();
        this.state = {
            weatherData: [
                {
                    "condition": null
                }
            ]
        }
    }

    componentDidMount(){
        this.fetchWeatherData()
    }



    renderWeatherCards = () => {
        return this.state.weatherData.map(hour => <WeatherCard weatherData={hour}></WeatherCard>)
    }

    parseWeatherData = (rawWeatherData) => {
        // debugger
        return rawWeatherData.list.map(hour => {
            return {
                "date": hour.dt_txt,
                "condition": hour.weather[0].main,
                "currentTemp": hour.main.temp,
                "feelsLike": hour.main.feels_like,
                "maxTemp": hour.main.temp_max,
                "minTemp": hour.main.temp_min
            }
        })
        
    }
    fetchWeatherData = () => {
        let response = null;
        fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip=11201&appid=69d7f9c22368119f2b5294225dc8d136&units=imperial")
        .then(response => response.json())
        .then(data => {
            let cleanWeatherData = this.parseWeatherData(data)
            this.setState({
                weatherData: cleanWeatherData
            })
        })
        .catch(err => response = "Failed")
        return response;
    }


    render(){
        return (
            <div>
                <Header></Header>
                {/* container for all the cards */}
                {this.renderWeatherCards()}
                {console.log(this.state.weatherData)}
            </div>
        )
    }
}

export default MainContent;
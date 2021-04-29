import { Row } from 'reactstrap';
import WeatherCard from '../components/WeatherCard'

export default function WeatherCards({weatherData}) {
    // // debugger

    // let formattedWeatherData = []
    // let currentDayWeatherData = []
    // let previousDay = (new Date(weatherData[0].date)).getDay()

    // for(let i = 0; i < weatherData.length; i++){
    //     let currentDay = (new Date(weatherData[i].date)).getDay()
    //     if(previousDay != currentDay){
    //         formattedWeatherData.push(currentDayWeatherData)
    //         currentDayWeatherData = []
    //     }
    //     currentDayWeatherData.push(weatherData[i])
    //     previousDay = currentDay
    // }

    // // debugger
    // return formattedWeatherData


    return weatherData.map(day => <WeatherCard weatherData={day[0]}></WeatherCard>)
}

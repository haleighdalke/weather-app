import { Row } from 'reactstrap';
import WeatherCard from '../components/WeatherCard'

export default function WeatherCards({weatherData}) {
    let formattedWeatherData = []

    for(let i = 0; i < weatherData.length-5; i+=5){  
        formattedWeatherData.push(
            <Row>
                <WeatherCard weatherData={weatherData[i]}></WeatherCard>
                <WeatherCard weatherData={weatherData[i+1]}></WeatherCard>
                <WeatherCard weatherData={weatherData[i+2]}></WeatherCard>
                <WeatherCard weatherData={weatherData[i+3]}></WeatherCard>
                <WeatherCard weatherData={weatherData[i+4]}></WeatherCard>
            </Row>
        )
    }

    return formattedWeatherData


}

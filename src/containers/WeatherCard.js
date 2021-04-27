import WeatherIcon from '../components/WeatherIcon'

function WeatherCard({weatherData})  {

    return(
        <div>
            <WeatherIcon condition={weatherData.condition}></WeatherIcon>
        </div>
    )
    
}

export default WeatherCard;
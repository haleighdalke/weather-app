import WeatherCard from "./WeatherCard";
import { WiDaySunny, WiCloudy, WiRain, WiBarometer } from "weather-icons-react";

function WeatherIcon({condition}) {

    switch (condition) {
        case "Clouds":
            return <WiCloudy size={100} color="blue" />
            break;
        case "Clear":
            return <WiDaySunny size={100} color="yellow" />
            break;
        case "Rain":
            return <WiRain size={100} color="grey" />
            break;
        default:
            return <WiBarometer size={100} color="red" />
            break;
    }
}

export default WeatherIcon;
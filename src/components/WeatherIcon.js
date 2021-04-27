import WeatherCard from "../containers/WeatherCard";
import { WiDaySunny, WiCloudy, WiBarometer } from "weather-icons-react";

function WeatherIcon({condition}) {

    switch (condition) {
        case "Clouds":
            return <WiCloudy size={200} color="blue" />
            break;
        case "Sun":
            return <WiDaySunny size={200} color="yellow" />
            break;
        default:
            return <WiBarometer size={200} color="red" />
            break;
    }
}

export default WeatherIcon;
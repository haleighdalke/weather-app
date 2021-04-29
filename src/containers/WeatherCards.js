import { Row } from 'reactstrap';
import WeatherCard from '../components/WeatherCard'

export default function WeatherCards({weatherData}) {

    // currently fetching 5 days of data, which will display in a single row
    return (
        <Row className="mx-5">
            {weatherData.map((day,i) => <WeatherCard id={"day" + i} weatherData={day}></WeatherCard>)}
        </Row>
    )
}

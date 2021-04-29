import WeatherIcon from './WeatherIcon'
import { Card, CardHeader, CardFooter, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// might need to be a class so it can hold state and pass the hour variable to table and event back up to render the weather icon
export default function WeatherCard({weatherData})  {

    let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let weekDay = new Date(weatherData.date).getDay()
    let previousWeekDay = weekDay

    return(
        <Card className="col-lg mx-1">
            <CardHeader>
                {daysOfTheWeek[weekDay]}
            </CardHeader>
            <CardBody>
                <WeatherIcon condition={weatherData.condition}></WeatherIcon>
                <CardText>
                    {weatherData.date}
                </CardText>
            </CardBody>
            <CardFooter>
                <span className="mr-auto text-danger">{weatherData.maxTemp}</span>
                <span className="ml-auto text-primary">{weatherData.minTemp}</span>

            </CardFooter>
        </Card>
    )
}
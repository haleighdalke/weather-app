import WeatherIcon from '../components/WeatherIcon'
import { Card, CardHeader, CardFooter, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function WeatherCard({weatherData})  {

    return(
        <Card className="col-2 offset-1">
            <CardHeader>
                Monday
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

export default WeatherCard;
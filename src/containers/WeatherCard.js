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
                    Hi
                </CardText>
            </CardBody>
            <CardFooter>
                47 and 50
            </CardFooter>
        </Card>
        
    )
    
}

export default WeatherCard;
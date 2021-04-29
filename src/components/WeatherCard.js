import WeatherIcon from './WeatherIcon'
import { Card, CardHeader, CardFooter, CardText, CardBody, CardTitle, CardSubtitle, Button, Table} from 'reactstrap';
import React, {Component} from 'react';


// might need to be a class so it can hold state and pass the hour variable to table and event back up to render the weather icon
export default class WeatherCard extends React.Component  {

    constructor(){
        super();
        this.state = {

        }
    }

    getFormattedDate = () => {
        // let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // let day = new Date(this.props.weatherData[0].date).getDay()
        // return daysOfTheWeek[day]
        return new Date(this.props.weatherData[0].date).toDateString()
    }

    renderTableRows = () => {
        return this.props.weatherData.map((hour, i)=> {
            // debugger
            let timeInHours = new Date(hour.date).getHours()
            let time;
            if(timeInHours == 0){
                time = "12:00am"
            }else if(timeInHours == 12){
                time = timeInHours + ":00pm"
            }else if(timeInHours > 12){
                time = timeInHours - 12 + ":00pm"
            }else{
                time = timeInHours + ":00am"
            }
            return(
                <tr onMouseEnter={() => this.handleRowMouseEnter(hour)} onMouseLeave={() => this.handleRowMouseLeave()} id={"hour" + i}>
                    <th scope="row">{time}</th>
                    <td className="text-danger">{hour.maxTemp}</td>
                    <td className="text-primary">{hour.minTemp}</td>
                </tr>
            )
        })
    }

    handleRowMouseEnter = (hour) => {
        this.setState({currentHour: hour})
    }

    handleRowMouseLeave = () => {
        this.setState({currentHour: this.props.weatherData[0]})
    }

    render() {
        return(
            <Card className="col-lg mx-1 bg-light">
                <CardBody>
                    <CardTitle className="">{this.getFormattedDate()}</CardTitle>
                    <WeatherIcon condition={this.state.currentHour ? this.state.currentHour.condition : this.props.weatherData[0].condition}></WeatherIcon>
                    <Table size="sm" borderless hover>
                        <tbody>
                            {this.renderTableRows()}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
}
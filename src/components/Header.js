import {Jumbotron, Button} from 'reactstrap'

function Header() {
    return (
        <Jumbotron className="bg-warning text-dark">
        <div className="col-7 ml-auto mr-auto">
            <h1 className="display-3">Weather App</h1>
            <p className="lead">A simple weather app that displays a 5-day weather forecast, where each day shows the high and low temperatures, and an image for sunny/rainy/cloudy/snowy</p>
            <hr className="my-2" />
            <p>See my Github Repo for the full code</p>
            <p className="lead">
                <a href="https://github.com/haleighdalke/weather-app" target="_blank"><Button color="dark">Github</Button></a>
            </p>
        </div>
    </Jumbotron>
    )
}

export default Header;
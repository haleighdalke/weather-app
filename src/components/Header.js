import {Jumbotron, Button, Container} from 'reactstrap'

function Header() {
    return (
        <Container>
        {/* <Jumbotron className="bg-primary"> */}
        <div className="pt-4">
            <h1 className="display-3">Weather App</h1>
            <p className="lead">A simple weather app that displays a 5-day weather forecast, where each day shows the high and low temperatures every 3 hours, and a dynamic image for sunny/rainy/cloudy on hour hover</p>
            <hr className="my-2" />
            <p>See my Github Repo for the full code</p>
            <p className="lead">
                <a href="https://github.com/haleighdalke/weather-app" target="_blank"><Button color="dark">Github</Button></a>
            </p>
        </div>
    {/* </Jumbotron> */}
    </Container>
    )
}

export default Header;
import React, { Component } from 'react';
import FormWeather from './FormWeather';

const API_KEY = '8317b8b85ce7e09eeb92e1f5b751e1e9';

class Weather extends Component {
    state = {
        city: '',
        temp: null,
        isWeather: false
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        this.setState({
            city: city,
            temp: data.main.temp,
            isWeather: true
        })
        console.log(data)
    }

    render() {
        return (
            <div>
                <FormWeather weatherMethod={this.gettingWeather}/>
                {this.state.isWeather && <p>Погода в городе {this.state.city}: {this.state.temp}</p>}
                
            </div>
        );
    }
}

export default Weather;
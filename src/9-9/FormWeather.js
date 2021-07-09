import React from 'react';

class FormWeather extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button type="submit">Получить погоду</button>
            </form>
        )
    }
}

export default FormWeather;
import React from 'react';
import { connect } from 'react-redux';
import './weatherCard.css';
import WeatherDetails from './WeatherDetails/WeatherDetails';

const WeatherCard = ({ weather }) => {
    return (
        <div className='weather-card pt-4 d-flex flex-column align-items-center mb-3'>
            <p className='city mb-0'>{weather.name}</p>
            <p className='temperature mb-0'>{Math.round(weather.main.temp * 10) / 10}°</p>
            <div className='d-flex flex-row justify-content-center'>
                <p className='main-weather mt-2 mb-0'>{weather.weather[0].main}</p>
                <div className={"weather-" + weather.weather[0].main.toLowerCase()}></div>
            </div>
            <p className='feels mb-0'>feels like {weather.main.feels_like}°</p>
            <WeatherDetails />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.weatherInCity
    }
}

export default connect(mapStateToProps)(WeatherCard);
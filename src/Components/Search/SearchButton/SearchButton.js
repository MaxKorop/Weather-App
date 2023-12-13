import React from 'react';
import { connect } from 'react-redux';
import { setWeatherInCity } from '../../../Store/weatherSlice';
import searchImg from '../../../assets/search.png';
import './searchButton.css';

const SearchButton = ({ apiKey, base, city, setWeatherInCity, onFetched }) => {

    const fetchWeatherData = () => {
        fetch(`${base}weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(result => setWeatherInCity(result))
            .then(result => onFetched(true));
    }
    
    return (
        <button onClick={fetchWeatherData} className='d-flex justify-content-center align-items-center search-btn'>
            <img src={searchImg} alt="Search" style={{ width: "30px", height: "30px" }} />
        </button>
    );
}

const mapStateToProps = (state) => {
    return {
        apiKey: state.api.key,
        base: state.api.base,
        city: state.weather.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeatherInCity: (weather) => dispatch(setWeatherInCity(weather)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);

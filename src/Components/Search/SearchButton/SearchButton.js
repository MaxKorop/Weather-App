import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherInCity } from '../../../Store/weatherSlice';

const SearchButton = () => {
    const { key, base } = useSelector(state => state.api);
    const { city, weatherInCity } = useSelector(state => state.weather);
    const dispatch = useDispatch();

    const fetchWeatherData = () => {
        fetch(`${base}weather?q=${city}&appid=${key}&units=metric`)
            .then(res => res.json())
            .then(result => dispatch(setWeatherInCity(JSON.stringify(result))));
    }
    
    return (
        <button onClick={fetchWeatherData}>
            Fetch data
        </button>
    );
}

export default SearchButton;

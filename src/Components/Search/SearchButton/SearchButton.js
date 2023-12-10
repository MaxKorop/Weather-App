import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherInCity } from '../../../Store/weatherSlice';
import searchImg from '../../../assets/search.png';
import './searchButton.css';

const SearchButton = ({ onFetched }) => {
    const { key, base } = useSelector(state => state.api);
    const { city } = useSelector(state => state.weather);
    const dispatch = useDispatch();

    const fetchWeatherData = () => {
        fetch(`${base}weather?q=${city}&appid=${key}&units=metric`)
            .then(res => res.json())
            .then(result => dispatch(setWeatherInCity(result)))
            .then(result => onFetched(true));
    }
    
    return (
        <button onClick={fetchWeatherData} className='d-flex justify-content-center align-items-center search-btn'>
            <img src={searchImg} alt="Search" style={{width: "30px", height: "30px"}}/>
        </button>
    );
}

export default SearchButton;

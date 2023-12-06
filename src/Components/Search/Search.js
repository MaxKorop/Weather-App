import React, { useEffect } from 'react';
import InputCity from './InputCity/InputCity';
import SearchButton from './SearchButton/SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../Store/weatherSlice';

const Search = () => {
    const weather = useSelector(state => state.weather.weatherInCity);

    return (
        <div>
            <InputCity />
            <SearchButton />
            <p>
                {weather}
            </p>
        </div>
    );
}

export default Search;

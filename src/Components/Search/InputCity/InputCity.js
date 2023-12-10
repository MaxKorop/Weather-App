import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCity } from '../../../Store/weatherSlice';
import { useSelector } from 'react-redux';
import './inputCity.css';

const InputCity = () => {
    const city = useSelector(state => state.weather.city);
    const storedCity = localStorage.getItem('city');
    const dispatch = useDispatch();

    const handleInputCity = (value) => {
        dispatch(setCity(value))
    }

    useEffect(() => {
        if (!city && storedCity) dispatch(setCity(storedCity));
    }, [city, storedCity, dispatch])

    return (
        <div>
            <input className='input-city' type="text" onChange={e => handleInputCity(e.target.value)} />
        </div>
    );
}

export default InputCity;

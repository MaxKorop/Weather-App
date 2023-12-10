import React, { useEffect } from 'react';
import { rememberCity } from '../../../Store/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import './cityAsDef.css';

const CityAsDefault = () => {
    const { city, storeCity } = useSelector(state => state.weather);
    const dispatch = useDispatch();
    
    const handleCheckbox = (value) => {
        dispatch(rememberCity(value))
    }

    useEffect(() => {
        if (storeCity) localStorage.setItem('city', city);
    }, [storeCity, city])

    return (
        <div className='mt-3 d-flex justify-content-between' style={{width: "35%"}}>
            <label for='saveCity' className='label-for-checkbox'>Save City as default
                <input type='checkbox' onChange={e => handleCheckbox(!storeCity)} name='saveCity' className='save-city' />
                <span className='checkmark'></span>
            </label>
        </div>
    );
}

export default CityAsDefault;

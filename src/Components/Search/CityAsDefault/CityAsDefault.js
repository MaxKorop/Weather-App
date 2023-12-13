import React, { useEffect } from 'react';
import { rememberCity } from '../../../Store/weatherSlice';
import { connect } from 'react-redux';
import './cityAsDef.css';

const CityAsDefault = ({ city, storeCity, rememberCity }) => {
    
    const handleCheckbox = (value) => {
        rememberCity(value);
    }

    useEffect(() => {
        if (storeCity) localStorage.setItem('city', city);
    }, [storeCity, city])

    return (
        <div className='mt-3 mb-3 d-flex justify-content-between' style={{ width: "60%" }}>
            <label htmlFor='save-city' className='label-for-checkbox'>
                <input type='checkbox' onChange={e => handleCheckbox(!storeCity)} name='save-city' className='save-city' />
                Save City as default (inputted value)
                <span className='checkmark'></span>
            </label>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        city: state.weather.city,
        storeCity: state.weather.storeCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rememberCity: (city) => dispatch(rememberCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityAsDefault);

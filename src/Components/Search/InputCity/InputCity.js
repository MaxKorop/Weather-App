import React, { useEffect } from 'react';
import { setCity } from '../../../Store/weatherSlice';
import { connect } from 'react-redux';
import './inputCity.css';

const InputCity = ({ city, setCity }) => {
    const storedCity = localStorage.getItem('city');

    const handleInputCity = (value) => {
        setCity(value);
    }

    useEffect(() => {
        if (!city && storedCity) setCity(storedCity);
    }, [city, storedCity])

    return (
        <div>
            <input className='input-city' type="text" onChange={e => handleInputCity(e.target.value)} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        city: state.weather.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity: (city) => dispatch(setCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCity);

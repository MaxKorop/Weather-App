import React from 'react';
import { useDispatch } from 'react-redux';
import { setCity } from '../../../Store/weatherSlice';

const InputCity = () => {
    const dispatch = useDispatch();

    const handleInput = (value) => {
        dispatch(setCity(value))
    }

    return (
        <div>
            <input type="text" onChange={e => handleInput(e.target.value)} />
        </div>
    );
}

export default InputCity;

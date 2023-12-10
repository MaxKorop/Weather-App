import React from 'react';
import { useSelector } from 'react-redux';
import './weatherDetails.css';

const WeatherDetails = () => {
    const weather = useSelector(state => state.weather.weatherInCity);

    const wind = {
        direction: () => {
            const deg = weather.wind.deg
            if (20 <= deg < 70) return "↗";
            else if (70 <= deg < 110) return "→";
            else if (110 <= deg < 160) return "↘";
            else if (160 <= deg < 200) return "↓";
            else if (200 <= deg < 250) return "↙";
            else if (250 <= deg < 290) return "←";
            else if (290 <= deg < 340) return "↖";
            else if (340 <= deg <= 360 || 0<= deg < 20) return "↑";
        }
    }

    return (
        <div className='w-75 d-flex flex-column pb-4'>
            <hr style={{ border: "1px solid #444444" }} />

            <div className='weather-details w-100 d-flex justify-content-between'>
                <p className='mb-1'>Humidity</p>
                <p className='mb-1'>{weather.main.humidity}%</p>
            </div>

            <div className='weather-details w-100 d-flex justify-content-between'>
                <p className='mb-1'>Wind</p>
                <p className='mb-1'>{ wind.direction() }{weather.wind.speed} m/s</p>
            </div>

            <div className='weather-details w-100 d-flex justify-content-between'>
                <p className='mb-1'>Wind gusts</p>
                <p className='mb-1'>{weather.wind.gust} m/s</p>
            </div>

            <div className='weather-details w-100 d-flex justify-content-between'>
                <p className='mb-1'>Pressure</p>
                <p className='mb-1'>{weather.main.pressure} hPa</p>
            </div>
            
            <div className='weather-details w-100 d-flex justify-content-between'>
                <p className='mb-1'>Visibility</p>
                <p className='mb-1'>{weather.visibility} m</p>
            </div>
        </div>
    );
}

export default WeatherDetails;

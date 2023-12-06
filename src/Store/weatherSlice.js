import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: "",
        weatherInCity: ""
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setWeatherInCity: (state, action) => {
            state.weatherInCity = action.payload;
        }
    }
});

export const { setCity, setWeatherInCity } = weatherSlice.actions;
export default weatherSlice.reducer;
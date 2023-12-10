import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: "",
        storeCity: false,
        weatherInCity: {}
    },
    reducers: {
        rememberCity: (state, action) => {
            state.storeCity = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setWeatherInCity: (state, action) => {
            state.weatherInCity = action.payload;
        }
    }
});

export const { setCity, setWeatherInCity, rememberCity, setSearchFromStorage } = weatherSlice.actions;
export default weatherSlice.reducer;
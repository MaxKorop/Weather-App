import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        base: "https://api.openweathermap.org/data/2.5/",
        key: process.env.REACT_APP_API_KEY
    }
});

export default apiSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import weatherReducer from "./weatherSlice";

export default configureStore({
    reducer: {
        api: apiReducer,
        weather: weatherReducer
    }
}); 
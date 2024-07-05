import { configureStore } from "@reduxjs/toolkit";
import useReduce from "./userSlice.jsx"
import moviesReducer from "./movieSlice.jsx"
const appStore=configureStore({
    reducer:{
        user:useReduce,
        movies:moviesReducer
    }
})

export default appStore;
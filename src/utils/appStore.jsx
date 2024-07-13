import { configureStore } from "@reduxjs/toolkit";
import useReduce from "./userSlice.jsx"
import moviesReducer from "./movieSlice.jsx"
import gptReducer from "./GptSlice.jsx"

const appStore=configureStore({
    reducer:{
        user:useReduce,
        movies:moviesReducer,
        gpt:gptReducer,
    }
})

export default appStore;
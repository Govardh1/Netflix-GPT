import { configureStore } from "@reduxjs/toolkit";
import useReduce from "./userSlice.jsx"

const appStore=configureStore({
    reducer:{
        user:useReduce
    }
})

export default appStore;
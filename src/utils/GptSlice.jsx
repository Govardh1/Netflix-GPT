import { createSlice } from "@reduxjs/toolkit";

const GptSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggelGptSearch:(state)=>{
            state.showGptSearch=!state.showGptSearch
        }
    }
})
export const {toggelGptSearch}=GptSlice.actions;
export default GptSlice.reducer;
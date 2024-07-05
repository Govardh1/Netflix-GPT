import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{NowPLayingMovies:null},
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPLayingMovies=action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies}=movieSlice.actions;
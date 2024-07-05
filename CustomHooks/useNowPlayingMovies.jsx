import { useDispatch } from "react-redux"
import { Api_options } from "../constants"
import { addNowPlayingMovies } from "../src/utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
const getNowPlayingMoviesList=async()=>{

  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Api_options )
  const json =await data.json()
   console.log(json)
   dispatch(addNowPlayingMovies(json.results))
}
useEffect(()=>{
  getNowPlayingMoviesList()
},[]) 
}

export default useNowPlayingMovies;
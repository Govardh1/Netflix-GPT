import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondayContainer = () => {
  const   movies=useSelector(store=>store.movies)
  return (
    <div className=' bg-black'>
    <div className='-mt-52 relative z-20'>
   
    <MovieList title={"Now playing "} Movies={movies.NowPLayingMovies}/>
    <MovieList title={"Trending"} Movies={movies.NowPLayingMovies}/>
    <MovieList title={"Popular"} Movies={movies.NowPLayingMovies}/>
    <MovieList title={"Upcoming"} Movies={movies.NowPLayingMovies}/>
    <MovieList title={"Comedy"} Movies={movies.NowPLayingMovies}/>

    </div>


    </div>
  )
}

export default SecondayContainer
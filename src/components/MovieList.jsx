import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,Movies}) => {
    console.log("movie list",Movies);
  return (
    <div className='px-6'>
       <h1 className='text-3xl py-4 font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
       <div className='flex '>
       {/* <MovieCard posterPath={Movies[0].poster_path}/>
        */}
        {Movies?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
       </div>
       </div>
    </div>
  )
}

export default MovieList
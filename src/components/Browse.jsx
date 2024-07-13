import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../../CustomHooks/useNowPlayingMovies.jsx'
import MainContainer from './MainContainer.jsx'
import SecondayContainer from './SecondayContainer.jsx'
import GPTsearch from './GPTsearch.jsx'
import { useSelector } from 'react-redux'


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
 useNowPlayingMovies()
  return (
    <div>
      <Header/>
      {showGptSearch?(<GPTsearch/>):   
     ( <><MainContainer/>
      <SecondayContainer/></>)}
    </div>
  )
}

export default Browse
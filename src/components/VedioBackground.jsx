import React, { useEffect, useState } from 'react';
import { Api_options2 } from '../../constants';

const VedioBackground = ({ movie_id }) => {
    const [trailerId,setTrailerId]=useState(null);
    const getMoviesVideos = async () => {
        try {
            console.log(`Fetching videos for movie ID: ${movie_id}`); 
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, Api_options2);
            const json = await response.json();
            console.log(json, "getMoviesVideos");
            const filterData = json.results.filter(vedio=>vedio.type==="Trailer");
            const trailer=filterData.length==0?filterData[1]:json.results[0];
            console.log(trailer);
            setTrailerId(trailer.key)
        } catch (error) {
            console.error('Error fetching movie videos:', error);
        }
    };
    
    useEffect(() => {
        getMoviesVideos();
    }, [movie_id]);

    return (
        <div className='w-screen'>
          <iframe 
    className='w-screen aspect-video' 
    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`} 
    title="YouTube video player"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin">
    </iframe>
        </div>
    );
};

export default VedioBackground;

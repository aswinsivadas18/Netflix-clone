import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../Axios';
import { API_KEY, imageUrl } from '../../Constrant/Constrants';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  const handleAlert = () => {
    alert("PLEASE CLICK ON THE MOVIE CARDS TO PLAY VIDEO");
    // Add your logic for playing the movie here
  };

  return (
    <div
      style={{
        backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})`,
      }}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{currentMovie ? currentMovie.title : ''}</h1>
        <div className='banner_buttons'>
          <button className='button' onClick={handleAlert}>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{currentMovie ? currentMovie.overview : ''}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;

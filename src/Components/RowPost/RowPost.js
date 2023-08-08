import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../Axios';
import { imageUrl, API_KEY } from '../../Constrant/Constrants';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: '420',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const videoKey = response.data.results[0]?.key || null;
        setUrlId(videoKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClosePopup = () => {
    setUrlId(null);
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((mov) => (
          <div className='new' key={mov.id}>
            <img
              onClick={() => handleClick(mov.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              alt='poster'
              src={`${imageUrl + mov.backdrop_path}`}
            />
            <p className='text'>{mov.original_title || mov.name}</p>
          </div>
        ))}
      </div>

      {urlId && (
        <div className='youtube-popup'>
          <button className='close-button' onClick={handleClosePopup}>
            Close
          </button>
          <YouTube videoId={urlId} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default RowPost;

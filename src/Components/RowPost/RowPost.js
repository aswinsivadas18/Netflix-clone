import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../Axios'
import { imageUrl, API_KEY } from '../../Constrant/Constrants'
import YouTube from 'react-youtube';

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '420',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleClick = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
                seturlId(response.data.results[0])
        }).catch((err)=>{console.log(err);})
    };



    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((mov) => {
                    return (
                        <div className='new'>
                            <img onClick={() => handleClick(mov.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + mov.backdrop_path}`} />
                            <p className='text'>{mov.original_title}{mov.name}</p>
                        </div>
                    )
                })}
            </div>

            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost

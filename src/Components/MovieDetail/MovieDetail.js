import React,{useEffect, useState} from 'react'
import axios from '../../axios'
import {API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'

function MovieDetails(){
    const {id} = useParams();
    const [urlId, setUrlId] = useState('');

    useEffect(()=>{
        axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
            if(response.data.results.length!==0){
              setUrlId(response.data.results[0])
            }else{
              console.log("ARRAY EMPTY")
            }
        }).catch(err => {
            console.log('Error fetching trailer', err);
          });
        }, [id]);

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      return (
        <div>
            <h2>Movie Trailer</h2>
            {urlId && <YouTube videoId={urlId.key} opts={opts} /> }
        </div>
      )

}

export default MovieDetails

import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import { useNavigate } from 'react-router-dom'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get(props.url).then(response=> {
      /*console.log(response.data);*/
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  },[props.url]);
  
  const handleMovie=(id)=>{
    navigate(`/movie/${id}`);
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
      </div>
    </div>
  );
}

export default RowPost
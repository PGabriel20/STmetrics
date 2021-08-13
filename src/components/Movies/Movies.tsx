import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState(0);

  useEffect(()=>{
    api.get('films').then(res => {
      setMovies(res.data.count);
    }).catch(error => {
      alert('Failed to fetch data from api');
    });
  },[]);

  return (
    <div>
        <h3>{movies}</h3>
        <strong>AMOUNT OF MOVIES</strong>
    </div>
  );
}

export default Movies;
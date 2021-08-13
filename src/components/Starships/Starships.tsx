import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const Starships: React.FC = () => {
  const [starships, setStarships] = useState(0);

  useEffect(()=>{
    api.get('starships').then(res => {
      setStarships(res.data.count);
    }).catch(error => {
      alert('Failed to fetch data from api');
    });
  },[]);

  return (
    <div>
        <h3>{starships}</h3>
        <strong>AMOUNT OF STARSHIPS</strong>
    </div>
  );
}

export default Starships;
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState(0);

  useEffect(()=>{
    api.get('planets').then(res => {
      setPlanets(res.data.count);
    }).catch(error => {
      alert('Failed to fetch data from api');
    });
  },[]);

  return (
    <div>
        <h3>{planets}</h3>
        <strong>AMOUNT OF PLANETS</strong>
    </div>
  );
}

export default Planets;
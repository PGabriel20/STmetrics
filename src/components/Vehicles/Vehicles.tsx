import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState(0);

  useEffect(()=>{
    api.get('vehicles').then(res => {
      setVehicles(res.data.count);
    }).catch(error => {
      alert('Failed to fetch data from api');
    });
  },[]);

  return (
    <div>
        <h3>{vehicles}</h3>
        <strong>AMOUNT OF VEHICLES</strong>
    </div>
  );
}

export default Vehicles;
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const TopVehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(()=>{
    api.get('vehicles').then(res => {
      setVehicles(res.data.results);

      const filteredArray = vehicles.map((x: any)=>{
        return x.pilots
      })

      console.log(filteredArray);

    }).catch(error => {
      alert('Failed to fetch data from api' +error);
    });
  },[]);

  return (
    <div>
        <strong>MOST POPULAR VEHICLES</strong>
        {vehicles.map((vehicle: any)=>{
          return <h4>{vehicle.name}</h4>
        })}
        <h4>VEHICLE</h4>
        <h4>VEHICLE</h4>
        <h4>VEHICLE</h4>
        <h4>VEHICLE</h4>
    </div>
  );
}

export default TopVehicles;
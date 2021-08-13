import React from 'react';

// import { Container } from './styles';

interface vehiclesData {
  amount: number
}

const Vehicles: React.FC<vehiclesData> = ({amount}) => {
  return (
    <div>
        <h3>{amount}</h3>
        <strong>AMOUNT OF VEHICLES</strong>
    </div>
  );
}

export default Vehicles;
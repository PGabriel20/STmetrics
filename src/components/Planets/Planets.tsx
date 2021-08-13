import React from 'react';

// import { Container } from './styles';

interface planetsData {
  amount: number
}

const Planets: React.FC<planetsData> = ({amount}) => {
  return (
    <div>
        <h3>{amount}</h3>
        <strong>AMOUNT OF PLANETS</strong>
    </div>
  );
}

export default Planets;
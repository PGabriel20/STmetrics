import React from 'react';

// import { Container } from './styles';

interface starshipsData {
  amount: number
}

const Starships: React.FC<starshipsData> = ({amount}) => {
  return (
    <div>
        <h3>{amount}</h3>
        <strong>AMOUNT OF STARSHIPS</strong>
    </div>
  );
}

export default Starships;
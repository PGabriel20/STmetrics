import React from 'react';

// import { Container } from './styles';

interface peopleData {
  amount: number
}

const People: React.FC<peopleData> = ({amount}) => {
  return (
    <div>
        <h3>{amount}</h3>
        <strong>AMOUNT OF PEOPLE</strong>
    </div>
  );
}

export default People;
import React from 'react';

// import { Container } from './styles';

interface moviesData {
  amount: number
}

const Movies: React.FC<moviesData> = ({amount}) => {
  return (
    <div>
        <h3>{amount}</h3>
        <strong>AMOUNT OF MOVIES</strong>
    </div>
  );
}

export default Movies;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const People: React.FC = () => {
  const [people, setPeople] = useState(0);

  useEffect(()=>{
    api.get('people').then(res => {
      setPeople(res.data.count);
    }).catch(error => {
      alert('Failed to fetch data from api');
    });
  },[]);

  return (
    <div>
        <h3>{people}</h3>
        <strong>AMOUNT OF PEOPLE</strong>
    </div>
  );
}

export default People;
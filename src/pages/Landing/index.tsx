import React from 'react';
import Header from '../../components/Header/Header';

import './styles.scss';

const LandingPage: React.FC = () => {
  return (
    <div className='pageWrapper'>
      <div className='mainContainer'>
        <section>
          <img src="./assets/SWicon.svg" alt="Star Wars logo" />
          <h2>STAR WARS - Metrics and statistics</h2>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
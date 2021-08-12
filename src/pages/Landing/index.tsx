import React from 'react';
import TopCharacters from '../../components/BottomCards/TopCharacters';
import TopStarships from '../../components/BottomCards/TopStarships';
import TopVehicles from '../../components/BottomCards/TopVehicles';
import Header from '../../components/Header/Header';
import Movies from '../../components/TopCards/Movies';
import People from '../../components/TopCards/People';
import Planets from '../../components/TopCards/Planets';
import Starships from '../../components/TopCards/Starships';
import Vehicles from '../../components/TopCards/Vehicles';

import './styles.scss';

const LandingPage: React.FC = () => {
  return (
    <div className='mainContainer'>
      <section>
        <img src="./assets/SWicon.svg" alt="Star Wars Logo" />
        <h2>STAR WARS - Metrics and statistics</h2>
      </section>
      <div className='topCards'>
        <People />
        <Planets />
        <Starships />
        <Vehicles />
        <Movies />
      </div>

      <div className='bottomCards'>
        <TopVehicles />
        <TopStarships />
        <TopCharacters />
      </div>
    </div>
  );
}

export default LandingPage;
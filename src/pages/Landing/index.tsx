import React from 'react';
import Movies from '../../components/MoviesCard/Movies';
import People from '../../components/People/People';
import Planets from '../../components/Planets/Planets';
import Starships from '../../components/Starships/Starships';
import TopCharacters from '../../components/TopCharacters/TopCharacters';
import TopStarships from '../../components/TopStarships/TopStarships';
import TopVehicles from '../../components/TopVehicles/TopVehicles';
import Vehicles from '../../components/Vehicles/Vehicles';

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
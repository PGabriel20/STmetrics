import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from '../../components/Movies/Movies';
import People from '../../components/People/People';
import Planets from '../../components/Planets/Planets';
import Starships from '../../components/Starships/Starships';
import TopCharacters from '../../components/TopCharacters/TopCharacters';
import TopPlanets from '../../components/TopPlanets/TopPlanets';
import TopStarships from '../../components/TopStarships/TopStarships';
import TopVehicles from '../../components/TopVehicles/TopVehicles';
import Vehicles from '../../components/Vehicles/Vehicles';
import api from '../../services/api';

import './styles.scss';

const LandingPage: React.FC = () => {
  const [peopleCount, setPeopleCount] = useState(0);
  const [planetCount, setPlanetCount] = useState(0);
  const [starshipCount, setStarshipCount] = useState(0);
  const [vehicleCount, setVehicleCount] = useState(0);
  const [movieCount, setMovieCount] = useState(0);


  async function fetchMainData() {
    const apiURLs = ['/people', '/planets', '/starships', '/vehicles', '/films'];

    const getPeople = await api.get(apiURLs[0]);
    const getPlanets = await api.get(apiURLs[1]);
    const getStarships = await api.get(apiURLs[2]);
    const getVehicles = await api.get(apiURLs[3]);
    const getMovies = await api.get(apiURLs[4]);

    axios.all([getPeople, getPlanets, getStarships, getVehicles, getMovies]).then(
      axios.spread((...allData) => {
        const peopleAmount = allData[0].data.count;
        const planetAmount = allData[1].data.count;
        const starshipAmount = allData[2].data.count;
        const vehicleAmount = allData[3].data.count;
        const movieAmount = allData[4].data.count;

        setPeopleCount(peopleAmount);
        setPlanetCount(planetAmount);
        setStarshipCount(starshipAmount);
        setVehicleCount(vehicleAmount);
        setMovieCount(movieAmount);
      })
    )
  }

  

  useEffect(() => {
    // downloadPeopleData();
    fetchMainData();
  }, []);

  return (
    <div className='mainContainer'>
      <section>
        <img src="./assets/SWicon.svg" alt="Star Wars Logo" />
        <h2>STAR WARS - Metrics and statistics</h2>
      </section>
      <div className='topCards'>
        <People amount={peopleCount}/>
        <Planets amount={planetCount}/>
        <Starships amount={starshipCount}/>
        <Vehicles amount={vehicleCount}/>
        <Movies amount={movieCount}/>
      </div>

      <div className='bottomCards'>
        <TopVehicles />
        <TopStarships />
        <TopCharacters />
        <TopPlanets />
      </div>
    </div>
  );
}

export default LandingPage;
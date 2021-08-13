import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from '../../components/Movies/Movies';
import People from '../../components/People/People';
import Planets from '../../components/Planets/Planets';
import Starships from '../../components/Starships/Starships';
import TopCharacters from '../../components/TopCharacters/TopCharacters';
import TopStarships from '../../components/TopStarships/TopStarships';
import TopVehicles from '../../components/TopVehicles/TopVehicles';
import Vehicles from '../../components/Vehicles/Vehicles';
import api from '../../services/api';

import './styles.scss';

const LandingPage: React.FC = () => {
  const [peopleCount, setPeopleCount] = useState([]);
  const [planetCount, setPlanetCount] = useState([]);
  const [starshipCount, setStarshipCount] = useState([]);
  const [vehicleCount, setVehicleCount] = useState([]);


  // async function fetchMainData() {
  //   const apiURLs = ['/people', '/planets', '/starships', '/vehicles'];

  //   const getPeople = await api.get(apiURLs[0]);
  //   const getVehicles = await api.get(apiURLs[1]);

  //   axios.all([getPeople, getVehicles]).then(
  //     axios.spread((...allData) => {
  //       const peopleCount = allData[0].data.count;
  //       const vehiclesArray = allData[1].data.count;

  //     })
  //   )
  // }

  const url = "/vehicles"

  async function downloadPeopleData() {

    let finishedDownloading = false;
    let peoplePageData = [];


    for (let i=1; finishedDownloading=true; i++) {
      const response = await api.get('/people/?page=' + i);
      peoplePageData.push(response.data.results);

      console.log(peoplePageData);
      
      if(response.data.next === null){
        finishedDownloading = true;
        break;
      }
    }
    
    const peopleArray = peoplePageData.flat();
    const allVehicles: Array<string> = peopleArray.map((x)=>x.vehicles).flat();
    
    console.log(peopleArray);
    console.log(allVehicles);

    var m = allVehicles.reduce((a:any, b:any) => {
      a[b] = ++a[b] || 1;
      return a;
    }, {});

    var arr = [];
    for (var key in m) {
      arr.push([key, m[key]]);
    }

    arr.sort(function(a, b) {
      return a[1] - b[1];
    });

    console.log(arr.slice(-5).map(function(e) {
      return e[0];
    }));

  }

  useEffect(() => {
    downloadPeopleData();
  }, []);

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
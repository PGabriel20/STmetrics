import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Loading from '../Loading/Loading';

// import { Container } from './styles';

const TopPlanets: React.FC = () => {

  const [topPlanets, setTopPlanets] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function downloadFilmData() {
    setIsLoading(true);

    let finishedDownloading = false;
    let filmPageData = [];

    //fetching the data from every page
    for (let i=1; finishedDownloading=true ; i++) {
      const response = await api.get('/films/?page=' + i);
      filmPageData.push(response.data.results);

      if(response.data.next === null){
        finishedDownloading = true;
        break;
      }
    }
    
    //Joining all the data in one single array
    const filmArray = filmPageData.flat();
    console.log(filmArray)
    const allPlanets: Array<string> = filmArray.map((arr)=>arr.planets).flat();
    
    // console.log(peopleArray);
    console.log(allPlanets.flat());

    var m = allPlanets.reduce((a:any, b:any) => {
      a[b] = ++a[b] || 1;
      return a;
    }, {});

    var arr = [];
    for (var key in m) {
      arr.push([key, m[key]]);
    }

    arr.sort((a, b) => {
      return a[1] - b[1];
    });

    const top5PlenatsUrls: Array<string> = arr.slice(-5).map((e) => e[0]);
    fetchPlanetsUrls(top5PlenatsUrls);
  }
  
  async function fetchPlanetsUrls(planetsURL: Array<string>){

    const apiURLs: Array<string> = planetsURL;
    let top5planets: Array<string> = [];

    for (let i=0; i<=4; i++) {
      const response = await api.get(apiURLs[i]);
      top5planets.push(response.data.name);
    }

    setTopPlanets(top5planets);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    downloadFilmData();
  },[])

  return (
    <div>
        <strong>MOST POPULAR PLANETS</strong>
        {isLoading
        ?(
          <Loading />
        ):(
          topPlanets.map((characterName)=>{
            return <h4 key={characterName}>{characterName}</h4>
          })
        )}
    </div>
  );
}

export default TopPlanets;
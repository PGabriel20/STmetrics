import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Loading from '../Loading/Loading';

// import { Container } from './styles';

const TopStarships: React.FC = () => {

  const [topStarships, setTopStarships] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function downloadPeopleData() {
    setIsLoading(true);

    let finishedDownloading = false;
    let peoplePageData = [];

    //fetching the data from every page
    for (let i=1; finishedDownloading=true ; i++) {
      const response = await api.get('/people/?page=' + i);
      peoplePageData.push(response.data.results);

      if(response.data.next === null){
        finishedDownloading = true;
        break;
      }
    }
    
    //Joining all the data in one single array
    const peopleArray = peoplePageData.flat();
    const allStarships: Array<string> = peopleArray.map((arr)=>arr.starships).flat();
    
    var m = allStarships.reduce((a:any, b:any) => {
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

    const top5StarshipsUrls: Array<string> = arr.slice(-5).map((e) => e[0]);

    fetchPeopleUrls(top5StarshipsUrls);
  }
  
  async function fetchPeopleUrls(starshipsURL: Array<string>){

    const apiURLs: Array<string> = starshipsURL;
    let top5starships: Array<string> = [];

    for (let i=0; i<=4; i++) {
      const response = await api.get(apiURLs[i]);
      top5starships.push(response.data.name);
    }

    setTopStarships(top5starships);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    downloadPeopleData();
  },[])

  return (
    <div>
        <strong>MOST POPULAR STARSHIPS</strong>
        {isLoading
        ?(
          <Loading />
        ):(
          topStarships.map((starshipName)=>{
            return <h4 key={starshipName}>{starshipName}</h4>
          })
        )}
    </div>
  );
}

export default TopStarships;
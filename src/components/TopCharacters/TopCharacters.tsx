import React, { useEffect, useState } from 'react';


import api from '../../services/api';
import Loading from '../Loading/Loading';

// import { Container } from './styles';

const TopCharacters: React.FC = () => {

  const [topCharacters, setTopCharacters] = useState<string[]>([]);
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
    const allCharacters: Array<string> = filmArray.map((arr)=>arr.characters).flat();
    
    // console.log(peopleArray);
    console.log(allCharacters.flat());

    var m = allCharacters.reduce((a:any, b:any) => {
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

    const top5PeopleUrls: Array<string> = arr.slice(-5).map((e) => e[0]);
    fetchPeopleUrls(top5PeopleUrls);
  }
  
  async function fetchPeopleUrls(peopleURL: Array<string>){

    const apiURLs: Array<string> = peopleURL;
    let top5characters: Array<string> = [];

    for (let i=0; i<=4; i++) {
      const response = await api.get(apiURLs[i]);
      top5characters.push(response.data.name);
    }

    setTopCharacters(top5characters);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    downloadFilmData();
  },[])

  return (
    <div>
        <strong>MOST POPULAR CHARACTERS</strong>
        {isLoading
        ?(
          <Loading />
        ):(
          topCharacters.map((characterName)=>{
            return <h4 key={characterName}>{characterName}</h4>
          })
        )}
    </div>
  );
}

export default TopCharacters;
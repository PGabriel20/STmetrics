import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const TopVehicles: React.FC = () => {

  const [topVehicles, setTopVehicles] = useState<string[]>([]);
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
    const allVehicles: Array<string> = peopleArray.map((arr)=>arr.vehicles).flat();
    
    // console.log(peopleArray);
    // console.log(allVehicles);

    var m = allVehicles.reduce((a:any, b:any) => {
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

    const top5VehiclesUrls: Array<string> = arr.slice(-5).map((e) => e[0]);

    fetchPeopleUrls(top5VehiclesUrls);
  }
  
  async function fetchPeopleUrls(vehiclesURL: Array<string>){

    const apiURLs: Array<string> = vehiclesURL;
    let top5vehicles: Array<string> = [];

    for (let i=0; i<=4; i++) {
      const response = await api.get(apiURLs[i]);
      top5vehicles.push(response.data.name);
    }

    setTopVehicles(top5vehicles);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    downloadPeopleData();
  },[])

  return (
    <div>
        <strong>MOST POPULAR VEHICLES</strong>
        {isLoading
        ?(
          <h4>Loading...</h4>
        ):(
          topVehicles.map((vehicleName)=>{
            return <h4 key={vehicleName}>{vehicleName}</h4>
          })
        )}
    </div>
  );
}

export default TopVehicles;
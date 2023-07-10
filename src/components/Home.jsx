import React, {useState, useEffect} from 'react'
import NcdCard from './NcdCard';

function Home() {
    const [ncdHomeArr, setNcdHomeArr] = useState([]);

    const getNCDIntervention = () => {
        fetch("https://extranet.who.int/whoncdspenwp/cms/json/intervention-list?_format=json")
          .then((response) => response.json())
          .then((arrData) => {
            setNcdHomeArr(arrData);
            
          })
          .catch((err) => {
            console.log(err.message);
          });

          console.log('ncdHomeArr',ncdHomeArr)
      };


      useEffect(() => {
        getNCDIntervention();
        
        // eslint-disable-next-line
      }, []);


  return (
    <div className="container text-center">
        <div className='row'>
        {ncdHomeArr.map((val, index)=>
        <div style={{width: '250px', height:'350px'}} className="col-md-3 mx-4" key={index}>
        <NcdCard ncdTitle={val.title} ncdLogo={val.logo}/>
        </div>
  )}
</div>
</div>
  )
}

export default Home

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/slice/Slice";
import { fetchChildApi } from "../redux/slice/ChildSlice";
import { useNavigate } from 'react-router-dom';
import NcdInterventionCard from './NcdInterventionCard';



function NcdIntervention() {
    const [ncdHomeArr, setNcdHomeArr] = useState([]);
    const dispatch=useDispatch();
    const state =useSelector((state)=>state)
    let navigate = useNavigate();
    const [fullArr, setFullArr] = useState([]);

    useEffect(() => {

        fetch("https://extranet.who.int/whoncdspenwp/cms/json/intervention-list?_format=json")
          .then((response) => response.json())
          .then((ncdData) => {
            setNcdHomeArr(ncdData);
          })
          .catch((err) => {
            console.log(err.message);
          });
          dispatch(fetchApi())
          dispatch(fetchChildApi())
          
        // eslint-disable-next-line
      }, []);
      
      

const getId=(e)=>{
 console.log('state',state) 
 if (e.target.value==="8"){
 let path = `cardiovascular`; 
  navigate(path);
 }
 else
 {
  let path="";
  navigate(path);
 }
}


  return (
    
     <div className="row">
        {ncdHomeArr.map((value, index)=>
        <div className='col-md-4 mx-auto' key={index}>
        <NcdInterventionCard nid={value.nid} key={index} title={value.title} logo={value.logo} onclick={getId}/>
         
  </div>
  )}
 
</div> 
  )
}

export default NcdIntervention

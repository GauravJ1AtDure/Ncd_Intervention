import React from 'react'
import { useSelector } from "react-redux";
import './style/CvdRiskAssesment.css'
import { Parser } from 'html-to-react';

function CvdRiskAssesment() {

  const state =useSelector((state)=>state)
  let arr=[...state.ncdChild.data[2]]
  let disArr=[]

  const getChild=()=>{
    console.log('arr',arr)
  }

  
  const getData=(e,p)=>{
    console.log('button',e.target.value)
    disArr = arr.filter(arr => arr.nid === e.target.value);
    console.log('disArr', disArr)
    
  }
 
  


  return (
    <div>
    <button onClick={getChild}>get</button>
    {arr.map((val,ind)=>
    
    <div key={ind} className='tab'>
    <button className='tablinks' value={val.nid} onClick={getData}>{val.title}</button>
    </div>
    
  
)}

<div key={disArr.title} id='tabcontent' className="tabcontent">  
    <h3>{disArr.title}</h3>
    <p>{Parser().parse(disArr.body)}</p>
  </div>
  
</div>
  )
}

export default CvdRiskAssesment

import React from 'react'
import { useSelector } from "react-redux";
import './style/CvdRiskAssesment.css'
import { Parser } from 'html-to-react';

function CvdRiskAssesment() {

  const state =useSelector((state)=>state)
    
    let arr=[]
    arr.push(state.ncdChild.data[2])

  const getChild=()=>{
    console.log('arr',arr[0])
  }

  const getData=(e,p)=>{
    let tabcontent = document.querySelector(".tabcontent");
    console.log('button',e.target.value)
    console.log('tabcontent',tabcontent)
    
  }
 


  return (
    <div>
    <button onClick={getChild}>get</button>
    {arr[0].map((val,ind)=>
    <>
    <div key={ind} className='tab'>
    <button className='tablinks' value={val.nid} onClick={getData}>{val.title}</button>
    </div>
    <div id={val.nid} className="tabcontent">  
    <h3>{val.title}</h3>
    <p>{Parser().parse(val.body)}</p>
  </div>
  </>
)}
</div>
  )
}

export default CvdRiskAssesment

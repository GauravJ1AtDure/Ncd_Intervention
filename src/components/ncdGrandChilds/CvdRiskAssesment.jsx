import React, {useState} from 'react'
import { useSelector } from "react-redux";
import './style/CvdRiskAssesment.css'
import { Parser } from 'html-to-react';

function CvdRiskAssesment() {

  const state =useSelector((state)=>state)
  let arr=[...state.ncdChild.data[2]]
  let disArr=[]
  let bodyData=<div key={arr[0].nid} id='tabcontent' className="tabcontent">data
  <h3>{arr[0].title}</h3>
  <p>{Parser().parse(arr[0].body)}</p> 
  </div>
  const [fullArr, setFullArr] = useState(bodyData);

  const getChild=()=>{
    console.log('arr',arr)
  }

  
  const getData=(e,p)=>{
    console.log('button',e.target.value)
    disArr = arr.filter(arr => arr.nid === e.target.value);
    console.log('disArr', disArr[0])
    bodyData=<div key={disArr[0].nid} id='tabcontent' className="tabcontent">
    <h3>{disArr[0].title}</h3>
    <p>{Parser().parse(disArr[0].body)}</p> 
    </div>
    setFullArr(bodyData)
    console.log('body',bodyData)
  }
 
  


  return (
    <div key={arr[0].nid}>
    <button onClick={getChild}>get</button>
    {arr.map((val,ind)=>
    <div key={ind} className='tab'>
    <button className='tablinks' value={val.nid} onClick={getData}>{val.title}</button>
    </div>
   
   
)}
 {fullArr}



  
</div>
  )
}

export default CvdRiskAssesment

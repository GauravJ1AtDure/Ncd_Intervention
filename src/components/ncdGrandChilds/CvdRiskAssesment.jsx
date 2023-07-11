import React from 'react'
import { useSelector } from "react-redux";
import styles from '../ncdGrandChilds/style/CvdRiskAssesment.css';
import { Parser } from 'html-to-react';

function CvdRiskAssesment() {

  const state =useSelector((state)=>state)
    
    let arr=[]
    arr.push(state.ncdChild.data[2])

  
    function openCity(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks;
    
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      // Show the current tab, and add an "active" class to the link that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    


  const getChild=()=>{
    console.log('arr',arr[0])
  }

  return (
    <div>
    <button onClick={getChild}>get</button>
    {arr[0].map((val,ind)=>
   <div>  
<div class="tab">
  <button class="tablinks" onclick="openCity(event, {val.title})">{val.title}</button>
</div>

<div id="London" class="tabcontent">
  <h3>{val.title}</h3>
  <p>{Parser().parse(val.body)}{Parser().parse(val.assess_desc)}</p>
</div>
   </div>   
)}
</div>
  )
}

export default CvdRiskAssesment

import React from 'react'
import { useSelector } from "react-redux";
import { Parser } from 'html-to-react';

function CvdRiskAssesment() {


  const state =useSelector((state)=>state)
    
    let arr=[]
    arr.push(state.ncdChild.data[2])


  return (
    <div className='container-fluid'>
    {arr.map((val, ind)=>
    <div key={ind} class="d-flex align-items-start">  
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id={val[0].title} data-bs-toggle="pill" data-bs-target={`#${val[0].nid}`} type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{val[0].title}</button>
    <button class="nav-link" id={val[1].title} data-bs-toggle="pill" data-bs-target={`#${val[1].nid}`} type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">{val[1].title}</button>
    <button class="nav-link" id={val[3].title} data-bs-toggle="pill" data-bs-target={`#${val[3].nid}`} type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">{val[3].title}</button>
    <button class="nav-link" id={val[4].title} data-bs-toggle="pill" data-bs-target={`#${val[4].nid}`}  type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">{val[4].title}</button>
    <button class="nav-link" id={val[8].title} data-bs-toggle="pill" data-bs-target={`#${val[8].nid}`} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">{val[8].title}</button>
    <button class="nav-link" id={val[9].title} data-bs-toggle="pill" data-bs-target={`#${val[9].nid}`}type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">{val[9].title}</button>
    <button class="nav-link" id={val[10].title} data-bs-toggle="pill" data-bs-target={`#${val[10].nid}`} type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">{val[10].title}</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id={val[0].nid} role="tabpanel" aria-labelledby={val[0].title} tabindex="0" ><h2>{val[0].title}</h2>{Parser().parse(val[0].body)}</div>

   <div class="tab-pane fade" id={val[1].nid} role="tabpanel" aria-labelledby={val[1].title} tabindex="0">

   <h2>{val[1].title}</h2>{val[1].assess_title}{Parser().parse(val[1].assess_desc)} {val[2].assess_title}{Parser().parse(val[2].assess_desc)}</div>

    <div class="tab-pane fade" id={val[3].nid} role="tabpanel" aria-labelledby={val[3].title} tabindex="0"><h2>{val[3].title}</h2>{Parser().parse(val[3].body)}</div>
    <div class="tab-pane fade" id={val[4].nid} role="tabpanel" aria-labelledby={val[4].title} tabindex="0">
    <h2>{val[4].title}</h2>
      {val[4].assess_title}<br/><img style={{width:"30%", height:"40%"}} src={val[4].assess_img} class="img-fluid img-thumbnail" alt={val[4].assess_title}/><br/><br/>
      {val[5].assess_title}<br/><img style={{width:"30%", height:"40%"}} src={val[5].assess_img} class="img-thumbnail" alt={val[5].assess_title}/><br/><br/>
      {val[6].assess_title}<br/><img style={{width:"30%", height:"40%"}} src={val[6].assess_img} class="img-thumbnail" alt={val[5].assess_title}/><br/><br/>
      {val[7].assess_title}<br/><img style={{width:"30%", height:"40%"}} src={val[7].assess_img} class="img-thumbnail" alt={val[7].assess_title}/>
    </div>
    <div class="tab-pane fade" id={val[8].nid} role="tabpanel" aria-labelledby={val[8].title} tabindex="0"><h2>{val[8].title}</h2>{Parser().parse(val[8].body)}</div>
    <div class="tab-pane fade" id={val[9].nid} role="tabpanel" aria-labelledby={val[9].title} tabindex="0"><h2>{val[9].title}</h2>{Parser().parse(val[9].body)}</div>
    <div class="tab-pane fade" id={val[10].nid} role="tabpanel" aria-labelledby={val[10].title} tabindex="0"><h2>{val[10].title}</h2>{Parser().parse(val[10].body)}</div>
  </div>
  
</div>
)}
</div>
  )
}

export default CvdRiskAssesment

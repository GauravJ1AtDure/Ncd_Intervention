import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Parser } from 'html-to-react';
/*import {fetchApi} from '../../redux/slice/Slice';*/

function Cardiovascular(props) {

    const [cardiovascularChilds, setCardiovascularChilds] = useState([]);
    let navigate = useNavigate();
    /*const dispatch=useDispatch();*/
    const state =useSelector((state)=>state)
    
    let arr=[]
    arr.push(state.ncdChild.data[1])
    
    const getId=(e)=>{
      /*console.log('state',state) 
      console.log('ncdArr',ncdArr)
      console.log('fetchApi',fetchApi)*/
      if (e.target.value==="61"){
      let path = `cvdriskassesment`; 
       navigate(path);
      }
      else
      {
       let path="";
       navigate(path);
      }
     }

    //console.log('arr', arr)


  return (
    <div className="row container-sm">
    {arr[0].map((val, ind)=>
    <div className='col-md-4 mx-auto' key={ind}>
<div key={ind} className='shadow p-3 mb-5 bg-body-tertiary rounded card text-center mb-3'>
<img src={val.logo} class="card-img-top" alt={val.title} title={val.title}/>
<div className="card-body">
<button key={ind} type="button" className="btn btn-light" value={val.nid} onClick={getId} >{Parser().parse(val.title)} </button>
</div>
</div>
</div>
    )}
      
      </div>
  )
}

export default Cardiovascular

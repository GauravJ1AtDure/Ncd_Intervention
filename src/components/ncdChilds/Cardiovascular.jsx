import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
/*import {fetchApi} from '../../redux/slice/Slice';*/

function Cardiovascular(props) {

    const [cardiovascularChilds, setCardiovascularChilds] = useState([]);

    /*const dispatch=useDispatch();*/
    const state =useSelector((state)=>state)
    
    let arr=[]
    arr.push(state.ncd.data)
  

      //console.log('arr', arr)


  return (
    <div className="row">
    {arr[0].map((val, ind)=>
    <div className='col-md-4 mx-auto' key={ind}>
<div key={ind} className='shadow p-3 mb-5 bg-body-tertiary rounded card text-center mb-3'>
<img src={val.logo} class="card-img-top" alt={val.title} title={val.title}/>
<div className="card-body">
<button type="button" className="btn btn-light">{val.title} </button>
</div>
</div>
</div>
    )}
      
      </div>
  )
}

export default Cardiovascular

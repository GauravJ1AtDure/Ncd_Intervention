import React from 'react'

function NcdInterventionCard(props) {
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded card text-center mb-3'>
    <img src={props.logo} class="card-img-top" alt={props.title} title={props.title}/>
    <div className="card-body">
    <button type="button" value={props.nid} className="btn btn-light" onClick={props.onclick}>{props.title}</button>
  </div>
  </div>
  )
}

export default NcdInterventionCard

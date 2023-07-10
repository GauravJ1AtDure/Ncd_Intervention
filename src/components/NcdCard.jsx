import React from 'react'

function NcdCard(props) {
  return (
    <div style={{padding:'5px'}} className="card shadow-lg my-3">
        <div>
    <img style={{height:'50%'}} src={props.ncdLogo} alt={props.ncdTitle} title={props.ncdTitle} className="card-img-top"/></div>
    <div className="card-body">
    <button type="button" className="btn btn-light">{props.ncdTitle}</button>
    </div>
  </div>
  )
}

export default NcdCard
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Components.css'


const Cards = (props) => {
    const navigate = useNavigate();
  return (
    <div className='card'>
      <div>
      <img src={props.img} alt=""/>
      </div>
      <h5>{props.name}</h5>
      <button onClick={e=>navigate(`/edit?url=${props.img}`)}>Edit</button>
    </div>
  )
}

export default Cards



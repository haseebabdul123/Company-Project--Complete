import React from 'react'
import "./style.css"
const Cards = (props) => {
  return (
    <div>
    <div class="single-card">
      <div class="img-area">
        <img src={props.imgsrc} alt=""/>
      </div>
      <div class="info">
        <h3>{props.title}</h3>
      </div>
    </div>
    </div>
  )
}

export default Cards

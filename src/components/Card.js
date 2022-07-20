import React from "react"
import "../css/Card.css"

const Card = ({name, date, time, number}) => {
  return(
    <div className="card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )
}

export default Card
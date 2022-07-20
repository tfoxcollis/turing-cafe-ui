import React from "react"
import "../css/ResContainer.css"
import Card from "./Card"

const ResContainer = ({reservations}) => {
  const allReservations = reservations.map(reservation => {
    return(
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />)
  })
  return(
    <div className="res-container">
      {allReservations}
    </div>
  )

}

export default ResContainer
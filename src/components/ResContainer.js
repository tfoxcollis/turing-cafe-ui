import React from "react"

const ResContainer = ({reservations}) => {
  const allReservations = reservations.map(reservation => {
    return(
    <div>
      <h2>{reservation.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>{reservation.number}</p>
      
    </div>)
  })
  return(
    <div className="res-container">
      {allReservations}
    </div>
  )

}

export default ResContainer
import React, { Component } from "react"


class ResForm extends Component{
  constructor(){
    super()
      this.state = {
        name: "",
        date: "",
        time: "",
        number: ""
      }
  }

  render(){
    return (
      <form>
        <input
          type="text"
          placeholder="Guest Name"
          name="guestname"
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
        />
        <input
          type="text"
          placeholder="Number of Guests"
          name="number"
          value={this.state.number}
        />
        <button >Make Reservation</button>
      </form>

    )}
}

export default ResForm
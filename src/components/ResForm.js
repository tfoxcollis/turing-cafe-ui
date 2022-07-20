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

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <form onSubmit={e => this.props.createReservation(e,this.state)}>
        <input
          type="text"
          placeholder="Guest Name"
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          placeholder="Number of Guests"
          name="number"
          value={this.state.number}
          onChange={e => this.handleChange(e)}
        />
        <button>Make Reservation</button>
      </form>

    )}
}

export default ResForm
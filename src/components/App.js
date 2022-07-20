import React, { Component } from 'react';
import '../css/App.css';
import ResContainer from "./ResContainer"
import ResForm from "./ResForm"

class App extends Component {
    constructor(){
      super()
      this.state = {
        reservations: []
      }
    }

componentDidMount(){
  fetch("http://localhost:3001/api/v1/reservations")
  .then(response => response.json())
  .then(data => this.setState({reservations: data}))
}

createReservation = (e, formdata) => {
  e.preventDefault()
  formdata.id = Date.now()
  this.setState((prevState) => {
    return {reservations: [...prevState.reservations, formdata]}
  })
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
        <ResForm createReservation={this.createReservation}/>
        <ResContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './AddContainer.css';

class AddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogName: '',
      breedName: '',
      numLegs: null,
      favToy: ''
    }
  }

  handleNameChange = event => {
    this.setState({dogName: event.target.value})
  }

  handleBreedChange = event => {
    this.setState({breedName: event.target.value})
  }

  handleLegChange = event => {
    this.setState({numLegs: event.target.value})
  }

  handleToyChange = event => {
    this.setState({favToy: event.target.value})
  }

  render() {
    return (
      <aside>
        <h1>Who's your favorite pupperz?</h1>
        <div>
          <h3>Enter their information below:</h3>
          <p>Name:</p>
          <input type="text" onChange={event => this.handleNameChange(event)}/>
          <p>Breed:</p>
          <input type="text" onChange={event => this.handleBreedChange(event)}/>
          <p>Number of legs:</p>
          <input type="number" onChange={event => this.handleLegChange(event)}/>
          <p>Favorite toy:</p>
          <input type="text" onChange={event => this.handleToyChange(event)}/>
        </div>
        <button type="button" onClick= {(props) => this.props.pupdateInfo(this.state)}>Submit your pup</button>
      </aside>
    )
  }
}


export default AddContainer;

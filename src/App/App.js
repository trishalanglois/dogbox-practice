import React, { Component } from 'react';
import './App.css';
import AddContainer from '../AddContainer/AddContainer';
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    }
  }

  render() {
    return (
      <div>
        <AddContainer />
        <CardContainer
          dogs={this.state.dogs}/>
      </div>
    )
  }
}

export default App;

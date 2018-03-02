import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation.js'

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    const updatedValue = event.target.value;

    this.setState( {userInput: updatedValue} );
  }

  render() {

    return (
      <div className="App">
        <input
          type="text"
          onChange={(event) => this.inputChangeHandler(event)}
          value={this.state.userInput}
          />
        <p>Length: {this.state.userInput.length}</p>
        <Validation
          textLength={this.state.userInput.length}
        />
      </div>
    );
  }
}

export default App;

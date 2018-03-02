import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    const updatedValue = event.target.value;

    this.setState( {userInput: updatedValue} );
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.userInput.split('')];
    chars.splice(charIndex, 1);
    const updatedChars = chars.join('');
    this.setState( {userInput: updatedChars} );
  }

  render() {

    const CharList = this.state.userInput.split('').map((char, index) => {
      return (
        <Char
          key={index}
          character={char}
          click={() => this.deleteCharHandler(index)} // anonymous function that holds a reference, we need to accept an index arg here
        />
      )
    });

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
        {CharList}
      </div>
    );
  }
}

export default App;

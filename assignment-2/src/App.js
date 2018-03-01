import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    value: ''
  }

  inputChangeHandler = (event) => {
    const updatedValue = event.target.value;

    this.setState( {value: updatedValue} );
  }

  render() {

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.value}
        />
      <p>Length: {this.state.value.length}</p>
      </div>
    );
  }
}

export default App;

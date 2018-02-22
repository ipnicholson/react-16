import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    users: [
      {username: 'Steelhead'},
      {username: 'ipnicholson'},
      {username: 'John Q. Public'}
    ]
  }

  inputChangeHandler = (event) => {
    this.setState( {
      users: [
        {username: event.target.value},
        {username: 'ipnicholson'},
        {username: 'John Q. Public'}
      ]
    } )
  }

  render() {
    const userInputStyle = {
      backgroundColor: 'red',
      border: '1px solid red',
      color: 'teal',
      padding: '20px'
    }

    return (
      <div className="App">
        <UserInput
          style={userInputStyle}
          username={this.state.users[0].username}
          changed={this.inputChangeHandler}
        >
        </UserInput>
        <UserOutput
          username={this.state.users[0].username}
        >
        </UserOutput>
        <UserOutput
          username={this.state.users[1].username}
        >
        </UserOutput>
        <UserOutput
          username={this.state.users[2].username}
        >
        </UserOutput>
      </div>
    );
  }
}

export default App;

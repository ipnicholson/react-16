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
    return (
      <div className="App">
        <UserInput
          currentName={this.state.users[0].username}
          changed={this.inputChangeHandler} // This property can be named anything, as long as it is accessed by same name from child
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

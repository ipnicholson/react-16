import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Ian', age: 99},
      {name: 'Steelhead', age: 14},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( {showPersons: !doesShow} ) // setState merges new state with old state
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Ian', age: 99},
        {name: event.target.value, age: 14},
        {name: 'Stephanie', age: 27}
      ]
    } )
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit', // will use surrounding font
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}
          >Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi! I'm a nested element!`)) // Using calls to React.createElement instead of calling return() with JSX as an argument
  }
}

export default App;

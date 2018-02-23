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
          <Person
            // Props are passed from here to the Person component
            // Person doesn't have access to the state
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
            >My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
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
        {/* this.state.persons.map(person => {
          <Person
            // Props are passed from here to the Person component
            // Person doesn't have access to the state
            name={person.name}
            age={person.age} />
        }); */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi! I'm a nested element!`)) // Using calls to React.createElement instead of calling return() with JSX as an argument
  }
}

export default App;

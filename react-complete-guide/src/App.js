import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Ian', age: 99},
      {id: '2', name: 'Steelhead', age: 14},
      {id: '3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} ) // setState merges new state with old state
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // use spread operator to avoid mutating state
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    console.log('person clicked')
    // const persons = this.state.persons.slice(); // slice is used to create a copy of persons instaed of a pointer (slice w/o args simply copies array)
    const persons = [...this.state.persons]; // Use ES6 spread operator to copy immutably
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit', // will use surrounding font
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {

      // Dynamic styling
      buttonStyle.backgroundColor = 'red';
      buttonStyle.color = 'black';

      // Create list of Person components
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // When using more than one arg in ES6 arrow functions, you must wrap them with ()
            return <Person
              click={() => this.deletePersonHandler(index)} // execute as an arrow function, alternative is bind
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id} />
          })}
        </div>
      );
    }

    // Dynamic styling for <p> This is really working!
    const classesArray = [];
    if (this.state.persons.length <= 2) classesArray.push("red");
    if (this.state.persons.length <= 1) classesArray.push("bold");
    const classes = classesArray.join(' ');

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}
          >Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
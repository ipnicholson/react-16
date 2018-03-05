import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/PersonList/PersonList'
import Cockpit from '../components/Cockpit/Cockpit'

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
    const persons = [...this.state.persons]; // Use ES6 spread operator to copy immutably
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <PersonList
          persons = {this.state.persons}
          click = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}
        />
      )
    }

    return (
      <div className="App">
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          click = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
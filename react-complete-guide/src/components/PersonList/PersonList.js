import React, { Component } from 'react'
import Person from './Person/Person'

class PersonList extends Component  {
  render () {
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.click( index )} // execute as an arrow function, alternative is bind
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed( event, person.id )}
        key={person.id}
      />
    })
  }
}

export default PersonList
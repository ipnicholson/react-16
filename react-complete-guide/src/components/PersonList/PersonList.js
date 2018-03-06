import React, { Component } from 'react'
import Person from './Person/Person'

class PersonList extends Component  {

  constructor (props) { // props can be accessed inside w/o this keyword
    super(props); // required for extending from Component class
    console.log('[PersonList.js] inside constructor', props);
  }

  componentWillMount () {
    console.log('[PersonList.js] Inside componentWillMount()')
  }

  componentDidMount () {
    console.log('[PersonList.js] Inside componentDidMount()')
  }

  render () {
    console.log('[PersonList.js] Inside render()')

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
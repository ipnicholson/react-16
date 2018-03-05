import React from 'react'
import Person from './Person/Person'

const PersonList = (props) => ( props.persons.map( ( person, index ) => {
    return <Person
      click={() => props.click( index )} // execute as an arrow function, alternative is bind
      name={person.name}
      age={person.age}
      changed={(event) => props.changed( event, person.id )}
      key={person.id}
    />
  })
);

export default PersonList
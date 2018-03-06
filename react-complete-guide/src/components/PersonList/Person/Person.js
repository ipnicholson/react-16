import React, { Component } from 'react';
import './Person.css'

class Person extends Component {

  constructor(props) { // props can be accessed inside w/o this keyword
    super(props); // required for extending from Component class
    console.log('[Person.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentWillUnmount() {
    console.log('[Person.js] I am about to be removed with componentWillUnmount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

  render () {

    console.log('[Person.js] Inside render()')

    return (
      <div className="Person" >
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Person;
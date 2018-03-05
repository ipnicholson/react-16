import React from 'react'
import './Cockpit.css'

const Cockpit = (props) => {
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit', // will use surrounding font
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  // Dynamic styling for <p> This is really working!
  const classesArray = [];
  if (props.persons.length <= 2) classesArray.push("red");
  if (props.persons.length <= 1) classesArray.push("bold");
  const classes = classesArray.join(' ');

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes}>This is really working!</p>
      <button
        style = {buttonStyle}
        onClick = {props.click}
        >Toggle Persons
      </button>
    </div>
  )
}

export default Cockpit
import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
  const userInputStyle = {
    backgroundColor: 'red',
    border: '1px solid red',
    color: 'teal',
    padding: '20px'
  }

  return (
    <div style = {userInputStyle}>
      <label>Username 1:</label>
      <input
        type="text"
        onChange={props.changed}
        value={props.currentName} />
    </div>
  );
};

export default UserInput
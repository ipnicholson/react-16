import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
  return (
    <div style = {props.style} >
      <label>Username 1:</label>
      <input type="text" onChange={props.changed} value={props.username}/>
    </div>
  )
}

export default UserInput
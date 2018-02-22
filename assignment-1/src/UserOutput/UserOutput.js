import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <h4>Author: {props.username}</h4>
      <p>
        Paragraph 1
      </p>
      <p>
        Paragraph 2
      </p>
    </div>
  )
}

export default UserOutput
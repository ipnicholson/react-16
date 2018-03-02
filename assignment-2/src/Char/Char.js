import React from 'react'

const Char = (props) => {

  const charStyle = {
    display: "inline-block",
    textAlign: "center",
    padding: "16px",
    margin: "16px",
    border: "1px solid black"
  }

  return (
    <div style={charStyle} onClick={props.click}>
      <p>{props.character}</p>
    </div>
  )
};

export default Char;
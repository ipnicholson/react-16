import React from 'react';

const Validation = (props) => {
  let message = null;

  message = (props.textLength < 5) ? "Text too short" : "Text long enough"

  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default Validation;
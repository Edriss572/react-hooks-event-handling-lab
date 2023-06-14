// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
  
  const handleOnFocuse = () => {
    console.log('Good!')
  }

  const handleOnBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  return (
    <button onFocus={handleOnFocuse} onBlur={handleOnBlur}>
      EyesOnMe
    </button>
  )
}

export default EyesOnMe

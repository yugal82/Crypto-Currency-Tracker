import React from 'react'

const Button = ({placeholder, onClick}) => {
  return (
        <span className='btn' onClick={onClick}>{placeholder}</span>
  )
}

export default Button
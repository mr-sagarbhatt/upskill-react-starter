import React from 'react'

const ColorBox = ({ color, setColor }) => {
  return (
    <div
      style={{ backgroundColor: color, height: '25px', width: '25px', border: '2px solid black' }}
      onClick={() => setColor(color)}
    ></div>
  )
}

export default ColorBox

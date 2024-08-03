/* eslint-disable prettier/prettier */
import React from 'react'
import Tooth from './Tooth'

// eslint-disable-next-line react/prop-types
function Teeth({ start, end, x, y, handleChange }) {
  const tooths = getArray(start, end)

  return (
    <g transform="scale(2)" id="gmain">
      {tooths.map((i) => (
        <Tooth
          onChange={handleChange}
          key={i}
          number={i}
          positionY={y}
          positionX={Math.abs((i - start) * 25) + x}
        />
      ))}
    </g>
  )
}

function getArray(start, end) {
  if (start > end) return getInverseArray(start, end)

  const list = []
  for (var i = start; i <= end; i++) {
    list.push(i)
  }

  return list
}

function getInverseArray(start, end) {
  const list = []

  for (var i = start; i >= end; i--) {
    list.push(i)
  }

  return list
}

export default Teeth

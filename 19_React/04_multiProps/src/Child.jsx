import React from 'react'

const Child = ({name, age, city}) => {
  return (
    <div>
      <h2>
        {name} is {age} years old and belong to {city}
      </h2>
    </div>
  )
}

export default Child

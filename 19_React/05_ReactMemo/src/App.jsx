import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child/>
    </div>
  )
}

export default App
